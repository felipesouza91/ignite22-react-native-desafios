import {
  TextArea as NativeTextArea,
  ITextAreaProps as NativeTextAreaProps,
} from 'native-base'
import React from 'react'

type ITextAreaProps = NativeTextAreaProps

const TextArea: React.FC<ITextAreaProps> = ({ ...rest }) => {
  return (
    <NativeTextArea
      autoCompleteType
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

export { TextArea }
