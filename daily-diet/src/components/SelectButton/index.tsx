import React from 'react'
import { Container, Status, Title } from './styles'
import { TouchableOpacityProps } from 'react-native'

interface ISelectButtonProps extends TouchableOpacityProps {
  title: string
  status?: 'success' | 'danger'
  isSelect: boolean
}

const SelectButton: React.FC<ISelectButtonProps> = ({
  title,
  isSelect,
  status = 'success',
  ...rest
}) => {
  return (
    <Container isSelect={isSelect} status={status} {...rest}>
      <Status status={status} isSelect={isSelect} />
      <Title>{title}</Title>
    </Container>
  )
}

export default SelectButton
