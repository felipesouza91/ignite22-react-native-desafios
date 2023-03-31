import styled, { css } from 'styled-components/native'
interface ITypeMeal {
  isHealthy: boolean
}
export const Container = styled.View<ITypeMeal>`
  flex: 1;
  padding-top: 40px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`
export const Content = styled.View`
  flex: 1;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
  gap: 24px;
`

export const TextBox = styled.View`
  gap: 8px;
`

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const ButtonBox = styled.View`
  margin-top: auto;
  gap: 9px;
`
