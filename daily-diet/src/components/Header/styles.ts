import styled from 'styled-components/native'

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 24px;
  max-height: 24px;
`

export const Logo = styled.Image`
  width: 82px;
`

export const UserImage = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
