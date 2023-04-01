import styled, { css } from 'styled-components/native'

interface ISuccessProps {
  success: boolean
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 24px 32px;
  align-items: center;
  justify-content: center;
`

export const Title = styled.Text<ISuccessProps>`
  ${({ theme, success }) => css`
    font-size: ${theme.FONT_SIZE['2XG']}px;
    color: ${success ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: 31px;
  `};
  text-align: center;
`

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: 20px;
  `};
  text-align: center;
`

export const PageImage = styled.Image`
  margin: 40px 0;
`

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: 20px;
  `};
`
