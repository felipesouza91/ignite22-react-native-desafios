import React from 'react'
import dayjs from 'dayjs'
import Button from '@components/Button'
import { NavigateHeader } from '@components/NavigateHeader'
import { IFoodData } from '@screens/Home'
import {
  Container,
  Content,
  Label,
  Title,
  SubTitle,
  TextBox,
  ButtonBox,
} from './styles'
import { TypeMeal } from './TypeMeal'

interface IMealInfoProps {
  data: IFoodData
}

const MealInfo: React.FC<IMealInfoProps> = ({ data }) => {
  return (
    <Container isHealthy={data.isHealthy}>
      <NavigateHeader title="Refeição" />
      <Content>
        <TextBox>
          <Title>{data.title}</Title>
          <Label>{data.description}</Label>
        </TextBox>
        <TextBox>
          <SubTitle>Data e hora</SubTitle>
          <Label>{dayjs(data.dateTime).format('DD/MM/YYYY [ás] HH:mm')}</Label>
        </TextBox>
        <TypeMeal isHealthy={data.isHealthy} />
        <ButtonBox>
          <Button label="Editar refeição" icon="pencil" />
          <Button label="Excluir refeição" icon="trash" type="secondary" />
        </ButtonBox>
      </Content>
    </Container>
  )
}

export { MealInfo }
