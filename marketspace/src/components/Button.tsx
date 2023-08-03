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
    <NativeButton variant={type} {...rest}>
      <Text
        color={type === 'gray' ? 'base.gray-2' : 'base.gray-7'}
        fontFamily="heading"
        lineHeight="md"
      >
        {title}
      </Text>
    </NativeButton>
  )
}

export default Button
