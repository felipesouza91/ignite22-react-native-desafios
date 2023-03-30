import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`
export const Content = styled.View`
  flex: 1;
  width: 100%;
  margin-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 40px 24px;
  gap: 24px;
`

export const RowSection = styled.View`
  flex-direction: row;
  gap: 20px;
`

export const DietSection = styled.View`
  gap: 8px;
  margin-bottom: auto;
`
export const Span = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    line-height: ${theme.LINE_HEIGHT.SMALL};
  `};
`

export const DateTimeButton = styled.TouchableOpacity`
  flex: 1;
`
export const RowSectionWrapper = styled.TouchableOpacity`
  flex: 1;
`
