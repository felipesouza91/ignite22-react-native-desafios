import { Center, Heading, Image, ScrollView, Text, VStack } from 'native-base'
import React from 'react'
import logo from '../assets/Logo.png'
import Button from '../components/Button'
import Input from '../components/Input'
const SignIn: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="gray.700">
        <Center
          bg="gray.600"
          borderBottomRadius={32}
          borderBottomLeftRadius={32}
          px="12"
          py="20"
        >
          <Image source={logo} alt="Logo" h="16" w="24" mt="4" />
          <Heading color="gray.100" fontSize="4xl">
            marketspace
          </Heading>
          <Text fontSize="sm" color="gray.300" lineHeight="md">
            Seu espaço de compra e venda
          </Text>
          <Text fontSize="sm" color="gray.200" lineHeight="md" mt="77" mb="4">
            Acesse sua conta
          </Text>
          <Input placeholder="E-mail" mb="4" />
          <Input placeholder="Senha" />
          <Button title="Entrar" type="blue" mt="8" />
        </Center>
        <VStack
          px="12"
          mt="5"
          mb="5"
          flex={1}
          alignContent="center"
          justifyContent="center"
          alignItems="center"
        >
          <Text fontSize="sm" color="gray.200" lineHeight="md" mb="4">
            Ainda não tem acesso?
          </Text>
          <Button title="Entrar" type="gray" />
        </VStack>
      </VStack>
    </ScrollView>
  )
}

export { SignIn }
