import styled from 'styled-components'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
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
  margin-top: 24px;
`

export const SaveButton = styled(TouchableOpacity)`
  border-radius: 12px;
  background-color: ${colors.TGL};
  padding: 12px 32px;
  align-items: center;
  justify-content: center;
`

export const CancelButton = styled(TouchableOpacity)`
  border-radius: 12px;
  border: 2px solid ${colors.TGL};
  padding: 12px 24px;
  align-items: center;
  justify-content: center;
`

export const ButtonsWrapper = styled(View)`
  margin-top: 60px;
  flex-direction: row;
  justify-content: space-around;
`
