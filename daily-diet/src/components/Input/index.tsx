import React from 'react'
import { TextInputProps } from 'react-native'
import { Container, Label, InputText } from './styles'
interface IInputProps extends TextInputProps {
  label?: string
  isTestArea?: boolean
}

const Input: React.FC<IInputProps> = ({
  isTestArea = false,
  label,
  textAlignVertical,
  ...rest
}) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputText isTestArea={isTestArea} {...rest} />
    </Container>
  )
}

export { Input }
