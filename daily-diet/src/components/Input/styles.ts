import styled, { css } from 'styled-components/native'

interface ITextAreaProps {
  isTestArea: boolean
}

export const Container = styled.View`
  gap: 4px;
  align-items: flex-start;
`
export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const InputText = styled.TextInput.attrs(() => ({
  textAlignVertical: 'top',
}))<ITextAreaProps>`
  width: 100%;
  padding: 14px;
  height: ${({ isTestArea }) => (isTestArea ? '120px' : '52px')};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`
