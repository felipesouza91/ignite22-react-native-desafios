import { IFoodData, ISectionFood } from './index'
import styled, { css } from 'styled-components/native'
import { SectionList } from 'react-native'

export const Container = styled.View`
  flex: 1;
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Span = styled.Text`
  margin-top: 40px;
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_100};
  `}
  line-height: 41.8px;
`
export const SectionText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XG}px;
    color: ${theme.COLORS.GRAY_100};
    line-height: ${theme.FONT_SIZE['3XG'] * 1.3}px;
  `}
`

export const List = styled(
  SectionList as typeof SectionList<IFoodData, ISectionFood>,
)`
  margin-top: 32px;
`
