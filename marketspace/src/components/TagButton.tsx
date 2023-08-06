import { Pressable, Text } from 'native-base'
import { XCircle } from 'phosphor-react-native'
import React from 'react'

interface ITagButtonProps {
  title: string
  isSelected?: boolean
}

const TagButton: React.FC<ITagButtonProps> = ({ title, isSelected }) => {
  return (
    <Pressable
      display="flex"
      py="6px"
      px="4"
      alignItems="center"
      justifyContent="center"
      mr="3"
      bg={isSelected ? 'product.blue-light' : 'base.gray-5'}
      rounded="full"
      flexDirection="row"
    >
      <Text
        fontFamily="heading"
        color={isSelected ? 'white' : 'base.gray-3'}
        mr="6px"
      >
        {title.toUpperCase()}
      </Text>
      {isSelected && <XCircle weight="fill" color="#EDECEE" size={16} />}
    </Pressable>
  )
}

export { TagButton }
