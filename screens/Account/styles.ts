import styled from 'styled-components'
import { View, Text, TextInput } from 'react-native'
import { colors } from '../../utils'

export const Wrapper = styled(View)`
  height: 100%;
  padding-left: 20px;
  margin-top: 18px;
`

export const Input = styled(TextInput)`
  border: 1px solid #c1c1c1c1;
  width: 60%;
  height: 38px;
  border-radius: 20px;
  padding-left: 12px;
`

export const Label = styled(Text)`
  margin-left: 8px;
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: bold;
  color: ${colors.TITLE};
`
export const Title = styled(Text)`
  margin-left: 8px;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.TITLE};
`

export const InputWrapper = styled(View)`
  margin-bottom: 20px;
`
