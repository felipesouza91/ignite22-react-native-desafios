import { ArrowUpRight } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

interface IContainerProps {
  isWarning: boolean
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  margin-top: 36px;
  width: 100%;
  padding: 20px 16px;
  background-color: ${({ theme, isWarning }) =>
    isWarning ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;
  position: relative;
  align-items: center;
  justify-content: center;
`
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
export const ArrowUpRightIcon = styled(ArrowUpRight).attrs<IContainerProps>(
  ({ theme, isWarning }) => ({
    color: isWarning ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
    size: 24,
  }),
)<IContainerProps>`
  position: absolute;
  right: 8px;
  top: 8px;
`
