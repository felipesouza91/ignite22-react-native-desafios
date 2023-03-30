import { IFoodData } from '@screens/Home'
import React from 'react'
import { Container, ClockTime, Description, IsHealthy, Divider } from './styles'
import dayjs from 'dayjs'
interface IFoodTileProps {
  data: IFoodData
}

const FoodTile: React.FC<IFoodTileProps> = ({ data }) => {
  return (
    <Container>
      <ClockTime>{dayjs(data.dateTime).format('HH:mm')}</ClockTime>
      <Divider />
      <Description>{data.description}</Description>
      <IsHealthy isHealthy={data.isHealthy} />
    </Container>
  )
}

export { FoodTile }
