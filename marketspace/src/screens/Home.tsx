import {
  Divider,
  FlatList,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
  VStack,
  View,
} from 'native-base'
import {
  ArrowRight,
  MagnifyingGlass,
  Sliders,
  Tag,
} from 'phosphor-react-native'
import React, { useState } from 'react'
import { Avatar } from '../components/Avatar'
import Button from '../components/Button'
import { FilterModal } from '../components/FilterModal'
import Input from '../components/Input'
import { ProductTile } from '../components/ProductTile'

const listTest = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const Home: React.FC = () => {
  const [showFilterModal, setShowFilterModal] = useState(false)

  function handleShowFilterModal() {
    setShowFilterModal(true)
  }

  function handleCloseFilterModal() {
    console.log('Teste')
    setShowFilterModal(false)
  }

  return (
    <VStack flex={1} bg="base.gray-6" px="6">
      <HStack mt="12" justifyContent="space-between" flexWrap="wrap">
        <HStack flex={1}>
          <Avatar
            source={{ uri: 'https://github.com/felipesouza91.png' }}
            size="45px"
            alt=""
            rounded="full"
            mr="10px"
          />
          <VStack>
            <Text fontSize="md" color="base.gray-1">
              Bem vindo,
            </Text>
            <Heading fontSize="md" color="base.gray-1">
              Felipe!
            </Heading>
          </VStack>
        </HStack>
        <Button title="Criar anúncio" />
      </HStack>
      <VStack mt="8">
        <Text fontSize="sm" color="base.gray-3">
          Seus produtos anunciados para venda
        </Text>
        <HStack
          py="3"
          px="4"
          mt="3"
          bg="rgba(100, 122, 199, 0.1)"
          rounded="xl"
          alignItems="center"
        >
          <Icon
            as={<Tag color="#364D9D" weight="bold" />}
            size={22}
            color="product.blue"
          />
          <VStack ml="4" mr="auto">
            <Heading>4</Heading>
            <Text>anúncios ativos</Text>
          </VStack>
          <HStack alignContent="baseline" justifyContent="center">
            <Heading fontSize="sm" mr="2" color="product.blue">
              Meus anúncios
            </Heading>
            <ArrowRight size={16} color="#364D9D" weight="bold" />
          </HStack>
        </HStack>
      </VStack>
      <VStack mt="8">
        <Text fontSize="sm" color="base.gray-3" mb="3">
          Compre produtos variados
        </Text>
        <Input
          placeholder="Buscar anúncio"
          InputRightElement={
            <HStack h="54px" py="3">
              <IconButton
                icon={<Icon as={<MagnifyingGlass weight="bold" />} size={20} />}
              />
              <Divider bg="base.gray-3" thickness="1" orientation="vertical" />
              <IconButton
                onPress={handleShowFilterModal}
                icon={<Icon as={<Sliders weight="bold" />} size={20} />}
              />
            </HStack>
          }
        />
      </VStack>
      <FlatList
        mt="6"
        mb="4"
        data={listTest}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <ProductTile />}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          display: 'flex',
          alignContent: 'space-between',
          justifyContent: 'space-between',
        }}
        ItemSeparatorComponent={() => <View h="6" />}
      />
      <FilterModal
        isVisible={showFilterModal}
        onClose={handleCloseFilterModal}
      />
    </VStack>
  )
}

export { Home }
