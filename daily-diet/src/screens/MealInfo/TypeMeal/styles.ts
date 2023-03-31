import styled, { css } from 'styled-components/native'
interface ITypeMeal {
  isHealthy: boolean
}
export const Container = styled.View`
  max-width: 144px;
  flex-direction: row;
  padding: 8px 16px;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 999px;
`

export const Status = styled.View<ITypeMeal>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const TypeMealLabel = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`
