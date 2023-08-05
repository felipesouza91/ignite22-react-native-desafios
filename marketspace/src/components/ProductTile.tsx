import { Badge, Heading, Image, Text, VStack, View } from 'native-base'
import React from 'react'
import { Avatar } from './Avatar'

interface IProductTileProps {
  isNew?: boolean
  isDisabled?: boolean
}

const ProductTile: React.FC<IProductTileProps> = ({
  isNew = true,
  isDisabled = false,
}) => {
  return (
    <VStack w="150px">
      <View position="relative">
        <View bg="base.gray-1" opacity={isDisabled ? 0.4 : 1} rounded="sm">
          <Image
            source={{ uri: 'https://github.com/felipesouza91.png' }}
            h="100px"
            alt=""
            rounded="sm"
            resizeMode="cover"
          />
          <Avatar
            source={{ uri: 'https://github.com/felipesouza91.png' }}
            size="24px"
            alt=""
            rounded="full"
            mr="10px"
            position="absolute"
            borderColor="white"
            borderWidth="2"
            left="4px"
            top="4px"
          />
          <Badge
            position="absolute"
            right="1"
            top="1"
            bgColor={isNew ? 'product.blue' : 'base.gray-2'}
            rounded="full"
          >
            <Heading fontSize="2xs" color="white">
              {isNew ? 'NOVO' : 'USADO'}
            </Heading>
          </Badge>
        </View>

        {isDisabled && (
          <Heading
            position="absolute"
            fontSize="11px"
            left="2"
            bottom="2"
            color="white"
          >
            ANÚNCIO DESATIVADO
          </Heading>
        )}
      </View>

      <Text
        mt="1"
        fontSize="md"
        color={isDisabled ? 'base.gray-4' : 'base.gray-2'}
      >
        Tênis vermelho
      </Text>
      <Heading color={isDisabled ? 'base.gray-4' : 'base.gray-1'}>
        R$ 99,90
      </Heading>
    </VStack>
  )
}

export { ProductTile }
