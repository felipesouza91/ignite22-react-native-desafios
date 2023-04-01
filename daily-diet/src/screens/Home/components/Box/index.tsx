import React from 'react'
import { Container, SubTitle, TotalTitle, ArrowUpRightIcon } from './styles'
import { useNavigation } from '@react-navigation/native'

interface IBoxProps {
  percent: number
}

const Box: React.FC<IBoxProps> = ({ percent }) => {
  const navigate = useNavigation()
  function handleNavigate() {
    navigate.navigate('Static')
  }
  return (
    <Container isWarning={percent < 40} onPress={handleNavigate}>
      <TotalTitle>{percent.toFixed(2)}%</TotalTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>
      <ArrowUpRightIcon isWarning={percent < 40} />
    </Container>
  )
}

export { Box }
