import {
  FlatList,
  HStack,
  Heading,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base'
import { Bank, Barcode, CreditCard, Money, QrCode } from 'phosphor-react-native'
import React from 'react'
import { Dimensions } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'
import { Avatar } from '../components/Avatar'
import Button from '../components/Button'
import { Header } from '../components/Header'

const paymentTypes = [
  {
    icon: Barcode,
    title: 'Boleto',
  },
  {
    icon: QrCode,
    title: 'Pix',
  },
  {
    icon: Money,
    title: 'Dinheiro',
  },
  {
    icon: CreditCard,
    title: 'Cartão de Crédito',
  },
  {
    icon: Bank,
    title: 'Depósito Bancário',
  },
]

const Product: React.FC = () => {
  const width = Dimensions.get('window').width
  return (
    <VStack flex={1} bg="base.gray-7">
      <Header showBeforeIcon="new" showBack />
      <View>
        <Carousel
          loop
          width={width}
          height={280}
          data={[...new Array(6).keys()]}
          renderItem={() => (
            <Image
              source={{ uri: 'https://github.com/felipesouza91.png' }}
              alt=""
              width={width}
              height={280}
            />
          )}
        />
        <FlatList
          position="absolute"
          bottom="2px"
          horizontal
          data={[...new Array(6).keys()]}
          renderItem={() => <View w="131px" h="3px" bg="base.gray-7" />}
          ItemSeparatorComponent={() => <View w="4px" bg="transparent" />}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack mt="5" mx="6">
          <HStack>
            <Avatar
              w="6"
              h="6"
              source={{ uri: 'https://github.com/felipesouza91.png' }}
              rounded="full"
              borderColor="product.blue-light"
              borderWidth="2"
              mr="2"
              alt=""
            />
            <Text fontSize="sm">Felipe Souza Santana</Text>
          </HStack>
          <View
            mt="26px"
            py="2px"
            px="2"
            bg="base.gray-5"
            rounded="full"
            w="16"
            alignItems="center"
          >
            <Text color="base.gray-2" fontSize="2xs">
              NOVO
            </Text>
          </View>
          <HStack mt="10px" alignItems="center" justifyContent="space-between">
            <Heading lineHeight="xl" fontSize="xl" letterSpacing="lg">
              Bicileta
            </Heading>
            <Heading lineHeight="xl" fontSize="xl" color="product.blue-light">
              R$ 130,00
            </Heading>
          </HStack>
          <Text color="base.gray-2" fontSize="sm">
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu.
            Vitae ante leo eget maecenas urna mattis cursus. Mauris metus amet
            nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis
            in aliquam.
          </Text>
          <HStack mt="6">
            <Text fontWeight="bold" mr="2">
              Aceita troca?
            </Text>
            <Text> Sim</Text>
          </HStack>
          <Text mt="4" fontWeight="bold">
            Meios de pagamento:
          </Text>
          <FlatList
            mt="2"
            keyExtractor={(item) => item.title}
            data={paymentTypes}
            renderItem={({ item }) => (
              <HStack alignItems="center">
                <Icon as={item.icon} size={18} />
                <Text ml="2" color="base.gray-2" fontSize="sm">
                  {item.title}
                </Text>
              </HStack>
            )}
            ItemSeparatorComponent={() => <View h="2" />}
          />
        </VStack>
      </ScrollView>
      <HStack
        px="6"
        h="20"
        alignContent="center"
        alignItems="center"
        bg="base.gray-7"
        justifyContent="space-between"
      >
        <HStack alignItems="flex-end">
          <Text>R$</Text>
          <Heading>120,00</Heading>
        </HStack>
        <Button title="Entrar em contato" type="blue" />
      </HStack>
    </VStack>
  )
}

export { Product }
