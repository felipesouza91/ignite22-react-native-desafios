import {
  Center,
  Checkbox,
  FlatList,
  HStack,
  Heading,
  Image,
  Pressable,
  Radio,
  ScrollView,
  Switch,
  Text,
  VStack,
  View,
} from 'native-base'
import { Plus, X } from 'phosphor-react-native'
import React from 'react'
import Button from '../components/Button'
import { Header } from '../components/Header'
import Input from '../components/Input'
import { TextArea } from '../components/TextArea'

const paymentTypes = [
  'Boleto',
  'Pix',
  'Dinheiro',
  'Cartão de Crédito',
  'Depósito Bancário',
]

const images = []

const NewAdvertisement: React.FC = () => {
  return (
    <VStack flex={1} mt="6" bg="base.gray-6">
      <Header title="Criar anúncio" showBack />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: 10,
          marginHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <VStack mt="5">
          <Heading fontSize="md" mb="1" color="base.gray-2">
            Imagens
          </Heading>
          <Text fontSize="md" color="base.gray-3">
            Escolha até 3 imagens para mostrar o quando o seu produto é
            incrível!
          </Text>
          <FlatList
            mt="4"
            data={images}
            horizontal
            keyExtractor={(item) => item}
            ListFooterComponent={
              <Pressable>
                <Center w="100px" h="100px" bg="base.gray-5" rounded="lg">
                  <Plus color="#9F9BA1" size={24} />
                </Center>
              </Pressable>
            }
            renderItem={({ item }) => (
              <Pressable position="relative" mr="2">
                <Image
                  source={{ uri: item }}
                  alt=""
                  w="100px"
                  h="100px"
                  rounded="lg"
                />
                <Center
                  position="absolute"
                  w="16px"
                  h="16px"
                  rounded="full"
                  bg="base.gray-2"
                  right="1"
                  top="1"
                >
                  <X size={12} color="#F7F7F8" />
                </Center>
              </Pressable>
            )}
          />
          <Heading fontSize="md" mb="1" mt="8" color="base.gray-2">
            Sobre o produto
          </Heading>
          <Input placeholder="Título do anúncio" mt="4" />
          <TextArea
            placeholder="Descrição do produto"
            mt="4"
            numberOfLines={6}
          />
          <Radio.Group name="productType">
            <HStack mt="4" justifyContent="space-between">
              <Radio value="new">Produto novo</Radio>
              <View mr="5" />
              <Radio value="used">Produto usado</Radio>
            </HStack>
          </Radio.Group>
          <Heading fontSize="md" mb="1" mt="8" color="base.gray-2">
            Venda
          </Heading>
          <Input
            InputLeftElement={
              <Text ml="4" fontSize="md" color="base.gray-1">
                R$
              </Text>
            }
            placeholder="Valor do produto"
            keyboardType="numeric"
            mt="4"
          />
          <Heading fontSize="md" mb="1" mt="4" color="base.gray-2">
            Aceita troca?
          </Heading>
          <Switch
            alignSelf="flex-start"
            size="lg"
            offTrackColor="base.gray-5"
            onThumbColor="base.gray-7"
            onTrackColor="product.blue-light"
          />
          <Heading color="base.gray-2" fontSize="md" mt="4">
            Meios de pagamento aceitos
          </Heading>
          <Checkbox.Group mt="3">
            {paymentTypes.map((payment) => (
              <Checkbox
                key={payment}
                color="product.blue-light"
                size="sm"
                value={payment}
                mt="2"
                fontSize="md"
                _checked={{
                  bg: 'product.blue-light',
                  borderColor: 'product.blue-light',
                }}
              >
                {payment}
              </Checkbox>
            ))}
          </Checkbox.Group>
        </VStack>
      </ScrollView>
      <HStack
        py="5"
        px="6"
        bg="base.gray-7"
        justifyContent="space-between"
        flexWrap="no-wrap"
      >
        <Button title="Cancelar" type="gray" flex={1} mr="3" />
        <Button title="Avançar" type="black" flex={1} />
      </HStack>
    </VStack>
  )
}

export { NewAdvertisement }
