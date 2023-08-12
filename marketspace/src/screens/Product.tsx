import { VStack } from 'native-base'
import React from 'react'
import { Header } from '../components/Header'

const Product: React.FC = () => {
  return (
    <VStack flex={1} bg="base.gray-5">
      <Header />
    </VStack>
  )
}

export { Product }
