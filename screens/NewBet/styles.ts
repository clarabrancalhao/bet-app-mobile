import styled from 'styled-components'
import { View, Text } from 'react-native'
import { colors } from '../../utils'

export const Wrapper = styled(View)`
  background-color: ${colors.BACKGROUND};
`

export const Title = styled(Text)`
  font-size: 22px;
  font-weight: bold;
  font-style: italic;
  color: ${colors.TITLE};
`

export const TitleWrapper = styled(View)`
  flex-direction: row;
  margin-top: 5px;
`

export const DrawerWrapper = styled(View)`
  margin-left: 24px;
`

export const CloseWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: 28px;
`
