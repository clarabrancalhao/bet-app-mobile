import styled from 'styled-components'
import { View, Text } from 'react-native'
import { IProps } from './index'
import { colors } from '../../utils'

export const Marker = styled(View)<IProps>`
  width: 6px;
  border-radius: 100px;
  height: auto;
  background-color: ${({ color }) => color};
`

export const CardWrapper = styled(View)`
  flex-direction: row;
  margin-top: 25px;
`

export const GameContentWrapper = styled(View)`
  justify-content: space-between;

  margin: 4px 15px 4px;
`

export const GameTitle = styled(Text)<IProps>`
  color: ${({ color }) => color};
  font-weight: bold;
  font-size: 16px;
  font-style: italic;
  margin-top: 7px;
`
export const Numbers = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.TEXT};
  margin-bottom: 4px;
`

export const PriceDateText = styled(Text)`
  font-size: 12px;
  font-style: italic;
  color: ${colors.TEXT};
`

export const TrashWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
