import {
  Avatar,
  Center,
  Heading,
  Image,
  Button as NativeButton,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { PencilSimple } from 'phosphor-react-native'
import React from 'react'
import avatarImg from '../assets/Avatar.png'
import logo from '../assets/Logo.png'
import Button from '../components/Button'
import Input from '../components/Input'

const SignUp: React.FC = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="base.gray-6"
    >
      <VStack pt="12" px="12" flex={1}>
        <Center>
          <Image source={logo} alt="Logo" h="40px" w="60px" mb="3" />
          <Heading>Boas vindas!</Heading>
          <Text
            mt="2"
            fontSize="sm"
            textAlign="center"
            fontFamily="body"
            color="base.gray-2"
            lineHeight="md"
          >
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtosdsds
          </Text>
          <Avatar source={avatarImg} size="88px" mt="8">
            <Avatar.Badge>
              <NativeButton
                position="absolute"
                bottom={0}
                right={-10}
                variant="unstyled"
                width="40px"
                height="40px"
                rounded="full"
                bg="product.blue-light"
                _pressed={{
                  bg: 'product.blue',
                }}
              >
                <PencilSimple size={16} color="#EDECEE" />
              </NativeButton>
            </Avatar.Badge>
          </Avatar>
          <Input mt="4" placeholder="Nome" />
          <Input mt="4" placeholder="E-mail" />
          <Input mt="4" placeholder="Telefone" />
          <Input mt="4" placeholder="Senha" />
          <Input mt="4" placeholder="Confirmação senha" />
          <Button title="Criar" type="black" mt="6" />
        </Center>
        <Center flex={1} my="5">
          <Text color="base.gray-2" mb="3">
            Já tem uma conta?
          </Text>
          <Button title="Ir para o login" type="gray" />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export { SignUp }
