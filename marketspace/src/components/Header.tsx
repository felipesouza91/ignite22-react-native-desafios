import { HStack, Heading, IconButton, View } from 'native-base'
import { ArrowLeft, PencilSimple, Plus } from 'phosphor-react-native'
import React from 'react'
interface IHeaderProps {
  title?: string
  showBack?: boolean
  showBeforeIcon?: 'new' | 'edit'
}
const Header: React.FC<IHeaderProps> = ({
  title,
  showBack,
  showBeforeIcon = '',
}) => {
  return (
    <HStack mt="7" px="6" justifyContent="space-between" alignItems="center">
      {showBack ? (
        <IconButton icon={<ArrowLeft size={22} color="#1A181B" />} />
      ) : (
        <View />
      )}
      <Heading fontSize="xl" color="base.gray-1">
        {title}
      </Heading>
      {showBeforeIcon !== 'new' && showBeforeIcon !== 'edit' ? (
        <View />
      ) : showBeforeIcon === 'edit' ? (
        <IconButton icon={<PencilSimple size={24} color="#1A181B" />} />
      ) : (
        <IconButton icon={<Plus size={24} color="#1A181B" />} />
      )}
    </HStack>
  )
}

export { Header }
