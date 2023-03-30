import styled, { css } from 'styled-components/native'

interface IContainerProps {
  type: 'default' | 'success' | 'danger'
  isHalf: boolean
}

export const Container = styled.View<IContainerProps>`
  width: ${({ isHalf }) => (isHalf ? '48%' : '100%')};
  padding: 20px 16px;
  ${({ theme, type }) => {
    let color: string = theme.COLORS.GRAY_600
    if (type === 'danger') {
      color = theme.COLORS.RED_LIGHT
    }
    if (type === 'success') {
      color = theme.COLORS.GREEN_LIGHT
    }
    return css`
      background-color: ${color};
    `
  }}

  border-radius: 8px;
  position: relative;
  align-items: center;
  justify-content: center;
`
export const Title = styled.Text`
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
  text-align: center;
`
