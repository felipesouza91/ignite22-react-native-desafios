import React from 'react'
import { Container, Status, TypeMealLabel } from './styles'

interface ITypeMealProps {
  isHealthy: boolean
}

const TypeMeal: React.FC<ITypeMealProps> = ({ isHealthy }) => {
  return (
    <Container>
      <Status isHealthy={isHealthy} />
      <TypeMealLabel>
        {isHealthy ? 'dentro da dieta' : 'fora da dieta'}
      </TypeMealLabel>
    </Container>
  )
}

export { TypeMeal }
