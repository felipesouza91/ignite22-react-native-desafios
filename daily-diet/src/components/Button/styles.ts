import { PencilSimpleLine, Trash } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface ITypeProps {
  type: 'primary' | 'secondary'
}

export const Container = styled.TouchableOpacity<ITypeProps>`
  height: 50px;
  border-radius: 6px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};

  ${({ theme, type }) =>
    type === 'secondary' &&
    css`
      background-color: transparent;
      border: 1px solid ${theme.COLORS.GRAY_100};
    `}
`

export const Label = styled.Text<ITypeProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === 'primary' ? theme.COLORS.white : theme.COLORS.GRAY_100};
  `}
  line-height: 41.8px;
`

export const PencilIcon = styled(PencilSimpleLine).attrs<ITypeProps>(
  ({ theme, type }) => ({
    color: type === 'primary' ? theme.COLORS.white : theme.COLORS.GRAY_100,
    size: 18,
  }),
)<ITypeProps>``
export const TrashIcon = styled(Trash).attrs<ITypeProps>(({ theme, type }) => ({
  color: type === 'primary' ? theme.COLORS.white : theme.COLORS.GRAY_100,
  size: 18,
}))<ITypeProps>``
