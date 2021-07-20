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
  margin-left: 24px;
  flex-direction: row;
  margin-top: 5px;
`

export const DrawerWrapper = styled(View)`
  height: 100%;
  flex: 1;
  justify-content: space-between;
`

export const CloseWrapper = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
  margin-right: 28px;
`

export const ButtonText = styled(Text)`
  font-size: 30px;
  font-style: italic;
  font-weight: bold;
  color: ${colors.TGL};
`
export const TotalText = styled(Text)`
  font-size: 14px;
  font-style: italic;
  color: ${colors.TITLE};
`

export const TotalWrapper = styled(View)`
  margin: 0 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 47px;
`

export const Bold = styled(Text)`
  font-weight: bold;
  font-size: 14px;
  font-style: normal;
  color: ${colors.TITLE};
`
