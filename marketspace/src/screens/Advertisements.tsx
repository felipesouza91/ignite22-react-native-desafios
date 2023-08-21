import { FlatList, HStack, Select, Text, VStack, View } from 'native-base'
import { CaretDown } from 'phosphor-react-native'
import React from 'react'
import { Header } from '../components/Header'
import { ProductTile } from '../components/ProductTile'
const listTest = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const Advertisements: React.FC = () => {
  return (
    <VStack flex={1} mt="6" bg="gray.700">
      <Header title="Meus anúncios" showBeforeIcon="new" />
      <VStack px="6" mt="9" flex={1}>
        <HStack justifyContent="space-between" alignItems="center">
          <Text>9 anúncios</Text>
          <Select
            minWidth="180"
            h="9"
            accessibilityLabel="Todos"
            placeholder="Todos"
            defaultValue="all"
            dropdownIcon={
              <View mr="4">
                <CaretDown size={16} />
              </View>
            }
            mt="1"
          >
            <Select.Item label="Todos" value="all" />
          </Select>
        </HStack>
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
      </VStack>
    </VStack>
  )
}

export { Advertisements }
