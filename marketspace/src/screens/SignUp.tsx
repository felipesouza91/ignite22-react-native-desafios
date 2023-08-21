import {
  Avatar,
  Center,
  Heading,
  Image,
  Button as NativeButton,
  ScrollView,
  Text,
  VStack,
  useTheme,
} from 'native-base'
import { PencilSimple } from 'phosphor-react-native'
import React from 'react'
import avatarImg from '../assets/Avatar.png'
import logo from '../assets/Logo.png'
import Button from '../components/Button'
import Input from '../components/Input'

const SignUp: React.FC = () => {
  const theme = useTheme()
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="gray.600"
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
            color="gray.200"
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
                bg="blue.100"
                _pressed={{
                  bg: 'blue.500',
                }}
              >
                <PencilSimple size={16} color={theme.colors.gray[600]} />
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
          <Text color="gray.200" mb="3">
            Já tem uma conta?
          </Text>
          <Button title="Ir para o login" type="gray" />
        </Center>
      </VStack>
    </ScrollView>
  )
}

export { SignUp }
