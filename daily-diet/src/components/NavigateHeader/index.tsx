import React from 'react'
import { ArrowLeftIcon, Button, Container, Title } from './styles'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
interface INavigateHeaderProps {
  title: string
}

const NavigateHeader: React.FC<INavigateHeaderProps> = ({ title }) => {
  const navigation = useNavigation()

  function handleBack() {
    navigation.navigate('Home')
  }

  return (
    <Container>
      <Button onPress={handleBack}>
        <ArrowLeftIcon />
      </Button>
      <Title>{title}</Title>
      <View />
    </Container>
  )
}

export { NavigateHeader }
