import styled from 'styled-components'
import { View, Text } from 'react-native'
import { colors } from '../../utils'

export const ContentWrapper = styled(View)`
  padding: 0 20px;
  background-color: ${colors.BACKGROUND};
  opacity: 0.8;
`

export const Title = styled(Text)`
  font-weight: bold;
  color: ${colors.TITLE};
  font-style: italic;
  font-size: 22px;
  margin: 26px 0 15px 0;
`

export const Paragraph = styled(Text)`
  font-size: 17px;
  font-style: italic;
  color: ${colors.TEXT};
`

export const Subtitle = styled(Text)`
  font-size: 17px;
  font-style: italic;
  color: ${colors.TEXT};
  font-weight: bold;
  margin-top: 25px;
  margin-bottom: 6px;
`

export const SmallText = styled(Text)`
  font-size: 14px;
  font-style: italic;
  color: ${colors.TEXT};
`

export const SmallBoldText = styled(Text)`
  font-size: 17px;
  font-style: italic;
  color: ${colors.TEXT};
  font-weight: bold;
`
