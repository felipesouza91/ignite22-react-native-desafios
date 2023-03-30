import React from 'react'
import { Container, Status, Title } from './styles'

interface ISelectButtonProps {
  title: string
  status?: 'success' | 'danger'
  isSelect: boolean
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  title,
  isSelect,
  status = 'success',
}) => {
  return (
    <Container isSelect={isSelect} status={status}>
      <Status status={status} isSelect={isSelect} />
      <Title>{title}</Title>
    </Container>
  )
}

export default SelectButton
