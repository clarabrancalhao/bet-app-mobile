import { View, Text } from 'react-native'
import styled from 'styled-components'

interface IProps {
  color: string
  className: string
}
export const ContentWrapper = styled(View)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`

export const ButtonText = styled(Text)<IProps>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 14px;
  font-style: italic;
`
