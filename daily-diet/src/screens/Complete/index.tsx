import React from 'react'
import Button from '@components/Button'
import successImage from '@assets/success.png'
import unsuccessImage from '@assets/unsuccess.png'
import { Container, Title, Subtitle, PageImage, BoldText } from './styles'

interface ICompleteProps {
  success?: boolean
}

const Complete: React.FC<ICompleteProps> = ({ success = false }) => {
  return (
    <Container>
      <Title success={success}>
        {success ? 'Continue assim!' : 'Que pena!'}
      </Title>

      {success ? (
        <Subtitle>
          Você continua <BoldText>dentro da dieta.</BoldText> Muito bem!
        </Subtitle>
      ) : (
        <Subtitle>
          Você <BoldText>saiu da dieta.</BoldText> dessa vez, mas continue se
          esforçando e não desista
        </Subtitle>
      )}

      <PageImage source={success ? successImage : unsuccessImage} />
      <Button label="Ir para a página inicial" />
    </Container>
  )
}

export { Complete }
