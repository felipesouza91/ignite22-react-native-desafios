import { Pressable, Text } from 'native-base'
import { XCircle } from 'phosphor-react-native'
import React from 'react'

interface ITagButtonProps {
  title: string
  isSelected?: boolean
  onPress?: () => void
}

const TagButton: React.FC<ITagButtonProps> = ({
  title,
  isSelected,
  onPress,
}) => {
  return (
    <Pressable
      display="flex"
      py="6px"
      px="4"
      alignItems="center"
      justifyContent="center"
      mr="3"
      bg={isSelected ? 'blue.100' : 'gray.500'}
      rounded="full"
      flexDirection="row"
      onPress={onPress}
    >
      <Text
        fontFamily="heading"
        color={isSelected ? 'white' : 'gray.300'}
        mr="6px"
      >
        {title.toUpperCase()}
      </Text>
      {isSelected && <XCircle weight="fill" color="#EDECEE" size={16} />}
    </Pressable>
  )
}

export { TagButton }
