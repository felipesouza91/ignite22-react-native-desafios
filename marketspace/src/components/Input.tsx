import {
  Input as NativeInput,
  IInputProps as NativeInputProps,
} from 'native-base'
import React from 'react'

type IInputProps = NativeInputProps

const Input: React.FC<IInputProps> = ({ ...rest }) => {
  return (
    <NativeInput
      w="full"
      borderRadius="sm"
      bgColor="gray.700"
      py="3"
      px="4"
      color="gray.200"
      lineHeight="sm"
      fontSize="md"
      borderWidth="0"
      fontFamily="mono"
      _focus={{ borderWidth: '1', borderColor: 'gray.300' }}
      {...rest}
    />
  )
}

export default Input
