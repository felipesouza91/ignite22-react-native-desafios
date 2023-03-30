import React from 'react'
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

const Statistic: React.FC = () => {
  const percenter = 50
  return (
    <Container isDanger={percenter < 40}>
      <TitleContainer>
        <Button>
          <ArrowLeftIcon isDanger={percenter < 40} />
        </Button>
        <TotalTitle>{percenter}%</TotalTitle>
        <SubTitle>das refeições dentro da dieta</SubTitle>
      </TitleContainer>
      <Content>
        <Title>Estatísticas gerais</Title>
        <BoxStatistic
          data={{
            value: 22,
            subTitle: 'melhor sequência de pratos dentro da dieta',
          }}
        />
        <BoxStatistic
          data={{
            value: 109,
            subTitle: 'refeições registradas',
          }}
        />
        <SnackContainer>
          <BoxStatistic
            isHalf
            data={{
              value: 100,
              subTitle: 'refeições dentro da dieta',
              type: 'success',
            }}
          />
          <BoxStatistic
            isHalf
            data={{
              value: 10,
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
