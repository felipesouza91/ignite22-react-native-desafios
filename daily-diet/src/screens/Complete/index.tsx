import React from 'react'
import Button from '@components/Button'
import successImage from '@assets/success.png'
import unsuccessImage from '@assets/unsuccess.png'
import { Container, Title, Subtitle, PageImage, BoldText } from './styles'
import { useRoute, useNavigation } from '@react-navigation/native'
const Complete: React.FC = () => {
  const { params } = useRoute()
  const navigation = useNavigation()
  const { success } = params as { success: boolean }
  function handleNavigation() {
    navigation.navigate('Home')
  }
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
      <Button label="Ir para a página inicial" onPress={handleNavigation} />
    </Container>
  )
}

export { Complete }
