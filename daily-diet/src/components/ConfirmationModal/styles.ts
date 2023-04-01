import styled, { css } from 'styled-components/native'

export const Container = styled.Modal``
export const Text = styled.Text`
  margin-top: 16px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XG}px;
    line-height: ${theme.LINE_HEIGHT.SMALL};
    color: ${theme.COLORS.GRAY_200};
  `}
  text-align: center;
`

export const Row = styled.View`
  flex-direction: row;
  gap: 12px;
  align-items: center;
  justify-content: center;
`

export const QuestionContent = styled.View`
  padding: 40px 24px 24px 24px;
  gap: 32px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
`

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background-color: rgba(0, 0, 0, 0.25);
`
