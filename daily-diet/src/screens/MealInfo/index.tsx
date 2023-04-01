import React, { useState } from 'react'
import dayjs from 'dayjs'
import Button from '@components/Button'
import { useRoute, useNavigation } from '@react-navigation/native'
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
import { ConfirmationModal } from '@components/ConfirmationModal'
import { remove } from '@utils/meals/repository'

const MealInfo: React.FC = () => {
  const [showDialog, setShowDialog] = useState(false)
  const { params } = useRoute()
  const navigation = useNavigation()
  const { data } = params as { data: IFoodData }

  function handleEdit() {
    navigation.navigate('NewMeal', {
      data,
    })
  }

  async function handleRemoveData() {
    await remove(data)
    navigation.navigate('Home')
  }

  function handleShowModal() {
    setShowDialog(true)
  }
  function handleDismissModal() {
    setShowDialog(false)
  }

  return (
    <Container isHealthy={data.isHealthy}>
      <NavigateHeader title="Refeição" />
      <Content>
        <TextBox>
          <Title>{data.name}</Title>
          <Label>{data.description}</Label>
        </TextBox>
        <TextBox>
          <SubTitle>Data e hora</SubTitle>
          <Label>{dayjs(data.dateTime).format('DD/MM/YYYY [ás] HH:mm')}</Label>
        </TextBox>
        <TypeMeal isHealthy={data.isHealthy} />
        <ButtonBox>
          <Button label="Editar refeição" icon="pencil" onPress={handleEdit} />
          <Button
            label="Excluir refeição"
            icon="trash"
            type="secondary"
            onPress={handleShowModal}
          />
        </ButtonBox>
      </Content>
      {showDialog && (
        <ConfirmationModal
          visible={showDialog}
          transparent={true}
          onCancel={handleDismissModal}
          onConfirm={handleRemoveData}
          onRequestClose={() => {
            setShowDialog(false)
          }}
        />
      )}
    </Container>
  )
}

export { MealInfo }
