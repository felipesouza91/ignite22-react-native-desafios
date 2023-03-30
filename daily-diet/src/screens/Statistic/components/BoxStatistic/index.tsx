import React from 'react'
import { Container, SubTitle, Title } from './styles'

interface IBoxStatisticProps {
  isHalf?: boolean
  data: {
    value: number
    subTitle: string
    type?: 'default' | 'success' | 'danger'
  }
}

const BoxStatistic: React.FC<IBoxStatisticProps> = ({
  data: { subTitle, value, type = 'default' },
  isHalf = false,
}) => {
  return (
    <Container type={type} isHalf={isHalf}>
      <Title>{value}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  )
}

export { BoxStatistic }
