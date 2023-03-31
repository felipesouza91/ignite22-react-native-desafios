import React from 'react'
import { Container, SubTitle, TotalTitle, ArrowUpRightIcon } from './styles'

interface IBoxProps {
  percent: number
}

const Box: React.FC<IBoxProps> = ({ percent }) => {
  return (
    <Container isWarning={percent < 40}>
      <TotalTitle>{percent.toFixed(2)}%</TotalTitle>
      <SubTitle>das refeições dentro da dieta</SubTitle>
      <ArrowUpRightIcon isWarning={percent < 40} />
    </Container>
  )
}

export { Box }
