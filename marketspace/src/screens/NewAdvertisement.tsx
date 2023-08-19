import {
  HStack,
  Heading,
  Radio,
  ScrollView,
  Text,
  VStack,
  View,
} from 'native-base'
import React from 'react'
import { Header } from '../components/Header'
import Input from '../components/Input'
import { TextArea } from '../components/TextArea'

// import { Container } from './styles';

const NewAdvertisement: React.FC = () => {
  return (
    <VStack flex={1} mt="6" bg="base.gray-6">
      <Header title="Criar anúncio" showBack />
      <ScrollView
        mx="6"
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
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
        </VStack>
      </ScrollView>
    </VStack>
  )
}

export { NewAdvertisement }
