import { IFoodData, ISectionFood } from './index'
import styled, { css } from 'styled-components/native'
import { SectionList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export const Container = styled(SafeAreaView)`
  flex: 1;
  padding: 40px 24px 24px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Span = styled.Text`
  margin-top: 15px;
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
export const EmptyContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_300};
    line-height: ${theme.FONT_SIZE.XG * 1.3}px;
  `}
`
export const List = styled(
  SectionList as typeof SectionList<IFoodData, ISectionFood>,
)``
