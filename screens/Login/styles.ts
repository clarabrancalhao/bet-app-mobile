import { Text, View } from 'react-native'
import styled from 'styled-components'

import { colors } from '../../utils'

export const LoginPageWrapper = styled(View)`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  background-color: ${colors.BACKGROUND};
`

export const ContentWrapper = styled(View)`
  align-items: center;
  justify-content: space-between;
  margin: auto;
`

export const LoginContentWrapper = styled(View)`
  flex-direction: column;
  align-items: center;
`

export const TitleText = styled(Text)`
  font-size: 35px;
  color: #707070;
  margin-bottom: 26px;
`

export const SignUpText = styled(Text)`
  margin-top: 30px;
  font-size: 35px;
  color: #707070;
`

export const BottomText = styled(Text)`
  color: ${colors.TITLE};
  font-size: 15px;
  text-align: center;
  margin-bottom: 22px;
`

export const Marker = styled(View)`
  width: 107px;
  height: 7px;
  border-radius: 12px;
  background-color: ${colors.TGL};
`

export const LogoText = styled(Text)`
  font-size: 44px;
  font-weight: bold;
  font-style: italic;
  text-align: center;
  color: ${colors.TITLE};
`
export const LogoWrapper = styled(View)`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 46px;
`
