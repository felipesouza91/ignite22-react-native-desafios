import Button from '@components/Button'
import React from 'react'
import { ModalProps } from 'react-native'
import { Container, Text, Row, Content, QuestionContent } from './styles'

interface IConfirmationModalProps extends ModalProps {
  onCancel: () => void
  onConfirm: () => void
}

const ConfirmationModal: React.FC<IConfirmationModalProps> = ({
  onCancel,
  onConfirm,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Content>
        <QuestionContent>
          <Text>Deseja realmente excluir o registro da refeição?</Text>
          <Row>
            <Button label="Cancelar" type="secondary" onPress={onCancel} />
            <Button label="Sim, excluir" onPress={onConfirm} />
          </Row>
        </QuestionContent>
      </Content>
    </Container>
  )
}

export { ConfirmationModal }
