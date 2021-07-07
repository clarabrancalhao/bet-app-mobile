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
  width: 80vw;
  height: 80vh;
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
`

export const SignUpText = styled(Text)`
  margin-top: 30px;
  font-size: 35px;
  color: #707070;
`
