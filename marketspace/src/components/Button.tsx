import {
  IButtonProps as INativeButtonProps,
  Button as NativeButton,
  Text,
} from 'native-base'
import React from 'react'

interface IButtonProps extends INativeButtonProps {
  type?: 'black' | 'blue' | 'gray'
  title: string
}

const Button: React.FC<IButtonProps> = ({ type = 'black', title, ...rest }) => {
  return (
    <NativeButton px="3" variant={type} {...rest}>
      <Text
        color={type === 'gray' ? 'gray.200' : 'gray.700'}
        fontFamily="heading"
        lineHeight="md"
      >
        {title}
      </Text>
    </NativeButton>
  )
}

export default Button
