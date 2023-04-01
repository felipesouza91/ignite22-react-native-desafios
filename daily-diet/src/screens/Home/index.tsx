import React, { useState, useCallback } from 'react'
import { Header } from '@components/Header'

import { Box } from './components/Box'
import {
  Container,
  List,
  SectionText,
  Span,
  EmptyContainer,
  Label,
} from './styles'
import Button from '@components/Button'
import { FoodTile } from './components/FoodTile'
import { View } from 'react-native'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllMeal } from '@utils/meals/repository'
export interface IFoodData {
  id: string
  name: string
  dateTime: Date
  description: string
  isHealthy: boolean
}

export interface ISectionFood {
  title: string
  data: IFoodData[]
}

const Home: React.FC = () => {
  const [data, setData] = useState<ISectionFood[]>([])
  const navigation = useNavigation()
  const loadData = useCallback(() => {
    getAllMeal().then((data) => {
      setData(data)
    })
  }, [])

  function handleNavigation() {
    navigation.navigate('NewMeal', {})
  }

  useFocusEffect(loadData)

  return (
    <Container>
      <Header />

      <Box percent={30} />
      <Span>Refeições</Span>
      <Button label="Nova refeição" icon="pencil" onPress={handleNavigation} />
      <List
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 32 }}
        sections={data}
        keyExtractor={(item, index) => item.dateTime.toString()}
        renderItem={({ item }) => <FoodTile data={item} />}
        renderSectionHeader={({ section: { title } }) => (
          <SectionText>{title}</SectionText>
        )}
        SectionSeparatorComponent={() => <View style={{ height: 12 }} />}
        ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
        ListEmptyComponent={() => (
          <EmptyContainer>
            <Label>Nenhum registro encontrado</Label>
          </EmptyContainer>
        )}
      />
    </Container>
  )
}

export { Home }
