import styled from 'styled-components'
import { View, Text } from 'react-native'
import { colors } from '../../utils'

export const ContentWrapper = styled(View)`
  margin: 0 20px 12px;
  background-color: ${colors.BACKGROUND};
  opacity: 0.8;
`

export const NumbersWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin: 20px 0;
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
  font-size: 17px;
  font-style: italic;
  color: ${colors.TEXT};
`

export const SmallBoldText = styled(Text)`
  font-size: 17px;
  font-style: italic;
  color: ${colors.TEXT};
  font-weight: bold;
`

export const ButtonsWrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;
`
export const GreenText = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: ${colors.TGL};
`

export const WhiteText = styled(Text)`
  font-weight: bold;
  font-size: 13px;
  color: #ffffff;
`

export const ButtonText = styled(Text)`
  font-weight: bold;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`
