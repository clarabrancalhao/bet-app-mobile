import { View, Text } from 'react-native'
import styled from 'styled-components'
import { colors } from '../../utils'

export const Wrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  height: 100px;
  align-items: flex-end;
  background-color: #ffffff;
  padding-bottom: 18px;
`

export const LogoWrapper = styled(View)`
  align-items: center;
  margin-left: 20px;
`

export const Marker = styled(View)`
  background-color: ${colors.TGL};
  width: 75px;
  height: 6px;
  border-radius: 6px;
`

export const LogoText = styled(Text)`
  font-size: 30px;
  color: ${colors.TITLE};
  font-weight: bold;
  font-style: italic;
`
