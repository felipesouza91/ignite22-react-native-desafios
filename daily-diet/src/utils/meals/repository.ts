import { IFoodData, ISectionFood } from '@screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { AppError } from '@utils/AppErro'
import * as Crypto from 'expo-crypto'

export interface IStaticsData {
  foodsHealthy: number
  foodsUnHealthy: number
  totalFoods: number
  sequenceFoodsHealthy: number
}

const APP_NAME = '@felipe:daily-diet'
type IFoodDataInput = Omit<IFoodData, 'id'>

export async function saveMeal(newMealInput: IFoodDataInput) {
  const newMeal = { id: Crypto.randomUUID(), ...newMealInput }
  try {
    await save(newMeal)
  } catch (err) {
    console.log(err)
    throw new AppError('Erro ao salvar')
  }
}

export async function updateMeal(newMeal: IFoodData) {
  const data = await loadStorageData()
  const mealIndex = data.findIndex((meal) => meal.id === newMeal.id)
  if (mealIndex < 0) {
    throw new AppError('Não foi possivel atualizar')
  }
  data[mealIndex] = newMeal
  await persistStorage(data)
}

export async function remove(meal: IFoodData) {
  const data = await loadStorageData()
  const mealIndex = data.findIndex((item) => item.id === meal.id)
  if (mealIndex < 0) {
    throw new AppError('Não foi possivel atualizar')
  }
  data.splice(mealIndex, 1)
  await persistStorage(data)
}

async function save(newMeal: IFoodData) {
  const data = await loadStorageData()
  data.push(newMeal)
  await persistStorage(data)
}

async function loadStorageData() {
  const data = await AsyncStorage.getItem(`${APP_NAME}`)
  if (!data) {
    return [] as IFoodData[]
  }
  const unOrderList = JSON.parse(data) as IFoodData[]
  const orderList = unOrderList.sort(
    (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
  )

  return orderList
}

export async function getMealGroupByDate() {
  const data = await loadStorageData()
  if (data.length < 0) {
    return []
  }
  const groupList: ISectionFood[] = []

  /*
    generate a list with dates formatted, first create a list dates
    exists in storage data, and formatte then.
    After i generate a list with uniquer datas, and group in a section list
  */
  data
    .reduce<string[]>((acc, item) => {
      const formattedDate = dayjs(item.dateTime).format('DD/MM/YYYY')
      acc.push(formattedDate)
      return [...acc, formattedDate]
    }, [])
    .forEach((uniqueDate) => {
      // create a list with dates
      if (!groupList.find((item) => item.title === uniqueDate)) {
        groupList.push({ title: uniqueDate, data: [] })
      }
    })

  /*
    populate meals inform group by date
  */
  data.reduce<ISectionFood[]>((list, item) => {
    const formattedDate = dayjs(item.dateTime).format('DD/MM/YYYY')
    const index = groupList.findIndex((item) => item.title === formattedDate)
    if (index > -1) {
      groupList[index].data.push(item)
      return [{ ...groupList[index] }]
    } else {
      const tempData = {
        title: formattedDate,
        data: [item],
      }
      list.push(tempData)
      return [...list]
    }
  }, [])

  return groupList
}

async function persistStorage(list: IFoodData[]) {
  await AsyncStorage.setItem(`${APP_NAME}`, JSON.stringify(list))
}

export async function getStatistics() {
  const data = await loadStorageData()
  const result: IStaticsData = {
    foodsHealthy: 0,
    foodsUnHealthy: 0,
    totalFoods: 0,
    sequenceFoodsHealthy: 0,
  }
  let lastUnHealthy = -1
  data.reduce((previous, item, currentIndex) => {
    if (item.isHealthy) {
      result.foodsHealthy = ++result.foodsHealthy
    } else {
      result.foodsUnHealthy = ++result.foodsUnHealthy
    }
    if (previous.isHealthy && item.isHealthy && lastUnHealthy > -1) {
      result.sequenceFoodsHealthy = ++result.sequenceFoodsHealthy
    } else {
      lastUnHealthy = currentIndex
    }
    result.totalFoods = ++result.totalFoods
    return item
  }, data[0])
  console.log(result)
  return result
}
