import styled from 'styled-components'
import { Text, View } from 'react-native'

import { colors } from '../../utils'

export const Title = styled(Text)`
  font-size: 22px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.TITLE};
`

export const Paragraph = styled(Text)`
  font-size: 17px;
  color: ${colors.TEXT};
  font-style: italic;
  margin-top: 15px;
`

export const Wrapper = styled(View)`
  margin-bottom: 150px;
`
export const ContentWrapper = styled(View)`
  margin: 26px 20px 0 20px;
`

export const NoGamesText = styled(Text)`
  font-size: 22px;
  text-align: center;
  font-style: italic;
  font-weight: bold;
  color: ${colors.TITLE};
  margin-top: 100px;
`
