import { Center, Flex, Image } from 'native-base'
import React from 'react'
import logo from '../assets/Logo.png'
const LoginScreen: React.FC = () => {
  return (
    <Flex bg="base.gray-7" flex={1}>
      <Center
        bg="base.gray-6"
        height="2/3"
        borderBottomRadius="2xl"
        borderBottomLeftRadius="2xl"
        px="12"
        py="16"
      >
        <Image source={logo} alt="Logo" h="16" w="24" />
      </Center>
    </Flex>
  )
}

export { LoginScreen }
