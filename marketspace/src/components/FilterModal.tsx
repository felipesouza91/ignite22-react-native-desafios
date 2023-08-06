import {
  Checkbox,
  HStack,
  Heading,
  Icon,
  IconButton,
  Modal,
  Switch,
  VStack,
} from 'native-base'
import { X } from 'phosphor-react-native'
import React from 'react'
import { TagButton } from './TagButton'

const paymentTypes = [
  'Boleto',
  'Pix',
  'Dinheiro',
  'Cartão de Crédito',
  'Depósito Bancário',
]

interface IFilterModal {
  isVisible: boolean
  onClose: () => void
}

const FilterModal: React.FC<IFilterModal> = ({ isVisible, onClose }) => {
  return (
    <Modal
      isOpen={isVisible}
      onClose={onClose}
      avoidKeyboard
      justifyContent="flex-end"
      size="full"
    >
      <Modal.Content>
        <Modal.Body>
          <VStack px="6">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading color="base.gray-1">Filtrar anúncios</Heading>
              <IconButton icon={<Icon as={X} size={24} />} />
            </HStack>
            <VStack mt="6">
              <Heading color="base.gray-2" fontSize="sm">
                Condição
              </Heading>
              <HStack mt="3">
                <TagButton title="Novo" isSelected />
                <TagButton title="Usado" />
              </HStack>
            </VStack>
            <VStack mt="6">
              <Heading color="base.gray-2" fontSize="sm">
                Aceita troca?
              </Heading>
              <Switch
                mt="3"
                size="lg"
                alignSelf="flex-start"
                offTrackColor="base.gray-5"
                onThumbColor="base.gray-7"
                onTrackColor="product.blue-light"
              />
            </VStack>
            <VStack mt="6">
              <Heading color="base.gray-2" fontSize="sm">
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
          </VStack>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

export { FilterModal }
