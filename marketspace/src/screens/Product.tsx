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
  useTheme,
} from 'native-base'
import {
  Bank,
  Barcode,
  CreditCard,
  Money,
  Power,
  QrCode,
  TrashSimple,
  WhatsappLogo,
} from 'phosphor-react-native'
import React, { useRef, useState } from 'react'
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

interface IProductProps {
  advertisement: number
  isEditable?: boolean
}

interface IAppFlatList {
  scrollToIndex: ({ animated, index, viewPosition }) => void
}

const Product: React.FC<IProductProps> = ({
  advertisement,
  isEditable = false,
}) => {
  const theme = useTheme()
  const width = Dimensions.get('window').width
  const disabled = false
  const [currentItem, setCurrentItem] = useState(0)
  const listRef = useRef<IAppFlatList>()
  return (
    <VStack flex={1} bg="gray.600">
      <Header showBeforeIcon={isEditable ? 'edit' : null} showBack />
      <View mt="2">
        <View
          opacity={disabled ? 0.4 : 1}
          bgColor={disabled ? 'gray.100' : 'transparent'}
        >
          <Carousel
            enabled={!disabled}
            loop
            width={width}
            height={280}
            onSnapToItem={(index) => {
              setCurrentItem(index)
              listRef.current.scrollToIndex({
                animated: true,
                index,
                viewPosition: 1,
              })
            }}
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
            ref={listRef}
            position="absolute"
            showsHorizontalScrollIndicator={false}
            bottom="2px"
            horizontal
            data={[...new Array(6).keys()]}
            renderItem={(item) => (
              <View
                w="131px"
                h="3px"
                bg="gray.700"
                opacity={item.index === currentItem ? 0.75 : 0.5}
              />
            )}
            ItemSeparatorComponent={() => <View w="4px" bg="transparent" />}
            onMomentumScrollEnd={(event) => {
              const sliderIndex = event.nativeEvent.contentOffset.x
                ? event.nativeEvent.contentOffset.x / width
                : 0
              console.log(sliderIndex)
            }}
          />
          {/* */}
        </View>
        {disabled && (
          <Heading
            color="gray.700"
            bottom={280 / 2}
            left={width / 2 - 65}
            position="absolute"
            fontSize="sm"
          >
            {'Anúncio desativado'.toUpperCase()}
          </Heading>
        )}
      </View>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack mt="5" mx="6">
          <HStack>
            <Avatar
              w="6"
              h="6"
              source={{ uri: 'https://github.com/felipesouza91.png' }}
              rounded="full"
              borderColor="blue.100"
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
            bg="gray.500"
            rounded="full"
            w="16"
            alignItems="center"
          >
            <Text color="gray.200" fontSize="2xs">
              NOVO
            </Text>
          </View>
          <HStack mt="10px" alignItems="center" justifyContent="space-between">
            <Heading
              color="gray.100"
              lineHeight="xl"
              fontSize="xl"
              letterSpacing="lg"
            >
              Bicileta
            </Heading>
            <Heading lineHeight="xl" fontSize="xl" color="blue.100">
              R$ 130,00
            </Heading>
          </HStack>
          <Text color="gray.200" fontSize="sm">
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
          <Text mt="4" fontWeight="bold" mb="2">
            Meios de pagamento:
          </Text>
          {paymentTypes.map((item) => (
            <HStack alignItems="center" key={item.title} mt="1">
              <Icon as={item.icon} size={18} />
              <Text ml="2" color="gray.200" fontSize="sm">
                {item.title}
              </Text>
            </HStack>
          ))}
          {isEditable && (
            <VStack mt="8" mb="2">
              {!disabled ? (
                <Button
                  leftIcon={<Power size={16} color={theme.colors.gray[600]} />}
                  title="Desativar anúncio"
                  mb="2"
                />
              ) : (
                <Button
                  leftIcon={<Power size={16} color={theme.colors.gray[600]} />}
                  title="Reativar anúncio"
                  mb="2"
                  type="blue"
                />
              )}
              <Button
                leftIcon={
                  <TrashSimple size={16} color={theme.colors.gray[300]} />
                }
                title="Excluir anúncio"
                type="gray"
              />
            </VStack>
          )}
        </VStack>
      </ScrollView>
      {!isEditable && (
        <HStack
          px="6"
          h="20"
          alignContent="center"
          alignItems="center"
          bg="gray.700"
          justifyContent="space-between"
        >
          <HStack alignItems="flex-end">
            <Text fontWeight="bold" color="blue.500">
              R$
            </Text>
            <Heading color="blue.500">120,00</Heading>
          </HStack>
          <Button
            leftIcon={
              <WhatsappLogo
                size={16}
                color={theme.colors.gray[600]}
                weight="fill"
              />
            }
            title="Entrar em contato"
            type="blue"
          />
        </HStack>
      )}
    </VStack>
  )
}

export { Product }
