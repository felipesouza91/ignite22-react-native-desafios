import { IFoodData, ISectionFood } from '@screens/Home'
import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { AppError } from '@utils/AppErro'
import * as Crypto from 'expo-crypto'

const APP_NAME = '@felipe:daily-diet'
type IFoodDataInput = Omit<IFoodData, 'id'>

export async function saveMeal(newMealInput: IFoodDataInput) {
  const newMeal = { id: Crypto.randomUUID(), ...newMealInput }
  try {
    const newMealList = await save(newMeal)
    await persistInStorage(newMealList)
  } catch (err) {
    console.log(err)
    throw new AppError('Erro ao salvar')
  }
}

export async function updateMeal(newMeal: IFoodData) {
  const dataFormatted = dayjs(newMeal.dateTime).format('DD/MM/YYYY')
  const storageSectionList = await getAllMeal()
  const originalSection = await findGroupTitleByMealId(newMeal.id)
  if (!originalSection) {
    throw new AppError('Não foi possivel atualizar')
  }
  if (originalSection.title === dataFormatted) {
    const mealIndex = originalSection.data.findIndex(
      (meal) => meal.id === newMeal.id,
    )
    if (mealIndex < 0) {
      throw new AppError('Não foi possivel atualizar')
    }
    originalSection.data[mealIndex] = newMeal
  } else {
    originalSection.data = originalSection.data.filter(
      (meal) => meal.id !== newMeal.id,
    )
  }
  const newSectionList = storageSectionList.filter(
    (sectionItem) => sectionItem.title !== originalSection.title,
  )
  await persistInStorage([...newSectionList, originalSection])
  const finalList = await save(newMeal)
  await persistInStorage(finalList)
}

export async function getAllMeal() {
  const data = await AsyncStorage.getItem(`${APP_NAME}`)
  if (!data) {
    return [] as ISectionFood[]
  }
  const unOrderList = JSON.parse(data) as ISectionFood[]
  const orderList = unOrderList.sort((a, b) => (a.title < b.title ? -1 : 1))

  return orderList
}

export async function remove(data: IFoodData) {
  const originalSection = await findGroupTitleByMealId(data.id)
  const storageSectionList = await getAllMeal()

  if (!originalSection) {
    throw new AppError('Não foi possivel atualizar')
  }
  originalSection.data = originalSection.data.filter(
    (meal) => meal.id !== data.id,
  )
  const newSectionList = storageSectionList.filter(
    (sectionItem) => sectionItem.title !== originalSection.title,
  )
  await persistInStorage([...newSectionList, originalSection])
}

async function save(newMeal: IFoodData) {
  const dataFormatted = dayjs(newMeal.dateTime).format('DD/MM/YYYY')
  const mealList = await getAllMeal()
  const sectionFoodIndex = mealList.findIndex(
    (item) => item.title === dataFormatted,
  )
  if (sectionFoodIndex < 0) {
    mealList.push({ title: dataFormatted, data: [newMeal] })
  } else {
    mealList[sectionFoodIndex].data.push(newMeal)
    mealList[sectionFoodIndex].data = mealList[sectionFoodIndex].data.sort(
      (a, b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime(),
    )
  }
  return mealList
}

async function persistInStorage(mealList: ISectionFood[]) {
  const finalList = mealList.filter((section) => section.data.length > 0)
  await AsyncStorage.setItem(`${APP_NAME}`, JSON.stringify(finalList))
}

async function findGroupTitleByMealId(id: string) {
  const mealList = await getAllMeal()
  const sectionGroup = mealList.find((item) => {
    const mealExists = item.data.find((meal) => meal.id === id)
    if (mealExists) {
      return item
    } else {
      return null
    }
  })
  return sectionGroup
}
