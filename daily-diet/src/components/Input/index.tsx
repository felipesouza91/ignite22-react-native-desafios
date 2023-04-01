import React, { useState } from 'react'
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
  const [isFocused, setIsFocused] = useState(false)
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputText
        isTestArea={isTestArea}
        isFocused={isFocused}
        {...rest}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false)
        }}
      />
    </Container>
  )
}

export { Input }
