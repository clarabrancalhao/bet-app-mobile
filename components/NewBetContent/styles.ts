import styled from 'styled-components'
import { View, Text, Dimensions } from 'react-native'
import { colors } from '../../utils'

export const ContentWrapper = styled(View)`
  background-color: ${colors.BACKGROUND};
`

export const NumbersWrapper = styled(View)`
  flex-direction: row;
  flex-wrap: wrap;
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
  margin-bottom: 15px;
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
  width: ${Dimensions.get('screen').width - 40}px;
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
