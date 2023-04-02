import React, { useCallback, useState } from 'react'
import { BoxStatistic } from './components/BoxStatistic'
import {
  Container,
  TitleContainer,
  SubTitle,
  TotalTitle,
  Content,
  Title,
  SnackContainer,
  Button,
  ArrowLeftIcon,
} from './styles'
import { useNavigation, useFocusEffect } from '@react-navigation/native'
import { getStatistics, IStaticsData } from '@utils/meals/repository'

const Statistic: React.FC = () => {
  const navigate = useNavigation()
  const [statistics, setStatistics] = useState<IStaticsData>()
  function handleNavigate() {
    navigate.navigate('Home')
  }

  const loadData = useCallback(() => {
    getStatistics().then((data) => setStatistics(data))
  }, [])

  useFocusEffect(loadData)

  if (!statistics) {
    return null
  }
  const percenter = Number(
    ((statistics.foodsHealthy / statistics.totalFoods) * 100).toPrecision(2),
  )

  return (
    <Container isDanger={percenter < 40}>
      <TitleContainer>
        <Button onPress={handleNavigate}>
          <ArrowLeftIcon isDanger={percenter < 40} />
        </Button>
        <TotalTitle>{percenter}%</TotalTitle>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </TitleContainer>
      <Content>
        <Title>Estatísticas gerais</Title>
        <BoxStatistic
          data={{
            value: statistics.sequenceFoodsHealthy,
            subTitle: 'melhor sequência de pratos dentro da dieta',
          }}
        />
        <BoxStatistic
          data={{
            value: statistics.totalFoods,
            subTitle: 'refeições registradas',
          }}
        />
        <SnackContainer>
          <BoxStatistic
            isHalf
            data={{
              value: statistics.foodsHealthy,
              subTitle: 'refeições dentro da dieta',
              type: 'success',
            }}
          />
          <BoxStatistic
            isHalf
            data={{
              value: statistics.foodsUnHealthy,
              subTitle: 'refeições fora da dieta',
              type: 'danger',
            }}
          />
        </SnackContainer>
      </Content>
    </Container>
  )
}

export { Statistic }
