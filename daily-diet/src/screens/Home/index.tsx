import React from 'react'
import { Header } from '@components/Header'

import { Box } from './components/Box'
import { Container, List, SectionText, Span } from './styles'
import Button from '@components/Button'
import { FoodTile } from './components/FoodTile'
import dayjs from 'dayjs'
import { View } from 'react-native'
export interface IFoodData {
  title: string
  dateTime: Date
  description: string
  isHealthy: boolean
}

export interface ISectionFood {
  title: string
  data: IFoodData[]
}

const DATA: ISectionFood[] = [
  {
    title: '12.08.22',
    data: [
      {
        title: 'name',
        dateTime: dayjs().add(1, 'hour').toDate(),
        description: 'X-tudo',
        isHealthy: false,
      },
      {
        title: 'name',
        dateTime: dayjs().add(2, 'hour').toDate(),
        description: 'Whey protein com leite',
        isHealthy: true,
      },
      {
        title: 'name',
        dateTime: dayjs().add(3, 'hour').toDate(),
        description: 'Salada cesar com frango grelhado',
        isHealthy: true,
      },
      {
        title: 'name',
        dateTime: dayjs().add(4, 'hour').toDate(),
        description: 'Vitamina de banana com abacate',
        isHealthy: true,
      },
    ],
  },
  {
    title: '11.08.22',
    data: [
      {
        title: 'name',
        dateTime: dayjs().subtract(1, 'day').add(4, 'hour').toDate(),
        description: 'Vitamina de banana com abacate',
        isHealthy: true,
      },
      {
        title: 'name',
        dateTime: dayjs().subtract(1, 'day').add(2, 'hour').toDate(),
        description: 'Vitamina de banana com abacate',
        isHealthy: true,
      },
    ],
  },
]

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Box percent={30} />
      <Span>Refeições</Span>
      <Button label="Nova refeição" icon="pencil" />
      <List
        sections={DATA}
        keyExtractor={(item, index) => item.dateTime.toString()}
        renderItem={({ item }) => <FoodTile data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionText>{title}</SectionText>
        )}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
      />
    </Container>
  )
}

export { Home }
