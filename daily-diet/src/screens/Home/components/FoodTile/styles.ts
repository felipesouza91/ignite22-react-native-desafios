import styled, { css } from 'styled-components/native'

interface IsHealthyProps {
  isHealthy: boolean
}

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: 49px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
  padding: 0 12px;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`

export const ClockTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_100};
    line-height: ${theme.FONT_SIZE['3XG'] * 1.3}px;
  `}
`

export const Divider = styled.View`
  width: 1px;
  height: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`

export const Description = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_200};
    line-height: ${theme.FONT_SIZE['3XG'] * 1.3}px;
  `}
`

export const IsHealthy = styled.View<IsHealthyProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ theme, isHealthy }) =>
    isHealthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
