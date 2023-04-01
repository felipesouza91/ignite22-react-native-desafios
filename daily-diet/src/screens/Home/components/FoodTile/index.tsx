import { IFoodData } from '@screens/Home'
import React, { useCallback } from 'react'
import { Container, ClockTime, Description, IsHealthy, Divider } from './styles'
import dayjs from 'dayjs'
import { useNavigation } from '@react-navigation/native'
interface IFoodTileProps {
  data: IFoodData
}

const FoodTile: React.FC<IFoodTileProps> = ({ data }) => {
  const navigation = useNavigation()

  const handleNavigation = useCallback(() => {
    navigation.navigate('MealInfo', { data })
  }, [data, navigation])

  return (
    <Container onPress={handleNavigation}>
      <ClockTime>{dayjs(data.dateTime).format('HH:mm')}</ClockTime>
      <Divider />
      <Description>{data.name}</Description>
      <IsHealthy isHealthy={data.isHealthy} />
    </Container>
  )
}

export { FoodTile }
