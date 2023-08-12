import { HStack, Heading, IconButton } from 'native-base'
import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
interface IHeaderProps {
  title?: string
}
const Header: React.FC<IHeaderProps> = ({ title }) => {
  return (
    <HStack mt="7" px="6" justifyContent="space-between">
      <IconButton icon={<ArrowLeft size={24} color="#1A181B" />} />
      <Heading>{title}</Heading>
      <IconButton />
    </HStack>
  )
}

export { Header }
