import { Modal } from 'native-base'
import React from 'react'

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
          <Modal.Header>Filtrar anúncios</Modal.Header>
          <Modal.CloseButton />
        </Modal.Body>
      </Modal.Content>
    </Modal>
  )
}

export { FilterModal }
