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
      bgColor="base.gray-7"
      py="3"
      px="4"
      color="base.gray-2"
      lineHeight="sm"
      fontSize="md"
      borderWidth="0"
      fontFamily="mono"
      _focus={{ borderWidth: '1', borderColor: 'base.gray-3' }}
      {...rest}
    />
  )
}

export default Input
