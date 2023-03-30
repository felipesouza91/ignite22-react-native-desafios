import React from 'react'
import logo from '../../assets/logo.png'
import { Container, Logo, UserImage } from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <Logo source={logo} />
      <UserImage source={{ uri: 'https://github.com/felipesouza91.png' }} />
    </Container>
  )
}

export { Header }
