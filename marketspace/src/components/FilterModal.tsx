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
import React, { useState } from 'react'
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
  const [selectedCondition, setSelectedCondition] = useState<
    'new' | 'used' | ''
  >('')

  function handleChangeSelectedCondition(condition: 'new' | 'used') {
    setSelectedCondition(condition)
  }

  return (
    <Modal
      isOpen={isVisible}
      avoidKeyboard
      justifyContent="flex-end"
      size="full"
    >
      <Modal.Content>
        <Modal.Body>
          <VStack px="6">
            <HStack justifyContent="space-between" alignItems="center">
              <Heading color="gray.100">Filtrar anúncios</Heading>
              <IconButton icon={<Icon as={X} size={24} />} onPress={onClose} />
            </HStack>
            <VStack mt="6">
              <Heading color="gray.200" fontSize="sm">
                Condição
              </Heading>
              <HStack mt="3">
                <TagButton
                  title="Novo"
                  isSelected={selectedCondition === 'new'}
                  onPress={() => handleChangeSelectedCondition('new')}
                />
                <TagButton
                  title="Usado"
                  isSelected={selectedCondition === 'used'}
                  onPress={() => handleChangeSelectedCondition('used')}
                />
              </HStack>
            </VStack>
            <VStack mt="6">
              <Heading color="gray.200" fontSize="sm">
                Aceita troca?
              </Heading>
              <Switch
                mt="3"
                size="lg"
                alignSelf="flex-start"
                offTrackColor="gray.500"
                onThumbColor="gray.700"
                onTrackColor="blue.100"
              />
            </VStack>
            <VStack mt="6">
              <Heading color="gray.200" fontSize="sm">
                Meios de pagamento aceitos
              </Heading>
              <Checkbox.Group mt="3">
                {paymentTypes.map((payment) => (
                  <Checkbox
                    key={payment}
                    color="blue.100"
                    size="sm"
                    value={payment}
                    mt="2"
                    fontSize="md"
                    _checked={{
                      bg: 'blue.100',
                      borderColor: 'blue.100',
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
