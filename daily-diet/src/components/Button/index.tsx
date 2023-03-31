import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Label, PencilIcon, TrashIcon } from './styles'

interface IButtonProps extends TouchableOpacityProps {
  icon?: 'pencil' | 'trash'
  label: string
  type?: 'primary' | 'secondary'
}

const Button: React.FC<IButtonProps> = ({
  label,
  icon,
  type = 'primary',
  ...rest
}) => {
  return (
    <Container type={type} {...rest}>
      {icon === 'pencil' && <PencilIcon type={type} />}
      {icon === 'trash' && <TrashIcon type={type} />}
      <Label type={type}>{label}</Label>
    </Container>
  )
}

export default Button
