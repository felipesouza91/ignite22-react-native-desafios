import styled, { css } from 'styled-components/native'

interface IStatusProps {
  status: 'success' | 'danger'
  isSelect: boolean
}

export const Container = styled.TouchableOpacity<IStatusProps>`
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;

  ${({ theme, isSelect, status }) =>
    isSelect
      ? status === 'success'
        ? css`
            background-color: ${theme.COLORS.GREEN_LIGHT};
            border: 1px solid ${theme.COLORS.GREEN_DARK};
          `
        : css`
            background-color: ${theme.COLORS.RED_LIGHT};
            border: 1px solid ${theme.COLORS.RED_DARK};
          `
      : css`
          background-color: ${theme.COLORS.GRAY_600};
        `}
`
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const Status = styled.View<IStatusProps>`
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: ${({ theme, status }) =>
    status === 'success' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`
