import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface IDangerProps {
  isDanger: boolean
}

export const Container = styled.View<IDangerProps>`
  flex: 1;

  background-color: ${({ theme, isDanger }) =>
    isDanger ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
`

export const TitleContainer = styled.View`
  width: 100%;
  padding: 44px 24px 34px 24px;
  align-items: center;
  position: relative;
`
export const Button = styled.TouchableOpacity`
  position: absolute;
  left: 24px;
  top: 44px;
`

export const ArrowLeftIcon = styled(ArrowLeft).attrs<IDangerProps>(
  ({ isDanger, theme }) => ({
    color: isDanger ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
    size: 24,
  }),
)<IDangerProps>``

export const TotalTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE['3XG']}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`

export const Content = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 33px 24px;
  align-items: center;
  gap: 12px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
  margin-bottom: 11px;
`
export const SnackContainer = styled.TouchableOpacity`
  flex-direction: row;
  gap: 12px;
`
