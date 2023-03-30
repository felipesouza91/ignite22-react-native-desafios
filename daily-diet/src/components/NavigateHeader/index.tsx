import React from 'react'
import { ArrowLeftIcon, Button, Container, Title } from './styles'
import { View } from 'react-native'
interface INavigateHeaderProps {
  title: string
}

const NavigateHeader: React.FC<INavigateHeaderProps> = ({ title }) => {
  return (
    <Container>
      <Button>
        <ArrowLeftIcon />
      </Button>
      <Title>{title}</Title>
      <View />
    </Container>
  )
}

export { NavigateHeader }
