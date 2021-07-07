import styled from 'styled-components'
import { View, Text, TextInput } from 'react-native'

export const Card = styled(View)`
  border: 1px solid #dddddd;
  border-radius: 24px;
  background-color: #ffffff;
`
export const ContentWrapper = styled(View)`
  flex-direction: column;
  border: 2px solid #ebebeb;
  padding: 10px 30px;
  width: 100%;
`

export const Paragraph = styled(Text)`
  color: #9d9d9d;
  font-size: 17px;
  margin-top: 34px;
`

export const Input = styled(TextInput)`
  font-size: 16px;
  border: none;
`

export const ForgetPasswordText = styled(Text)`
  padding-top: 26px;
  padding-right: 20px;
  text-align: right;
  color: #c1c1c1;
  font-weight: 400;
  font-size: 17px;
`

export const ErrorText = styled(Text)`
  padding-top: 10px;
  color: red;
  font-size: 14px;
  font-weight: 600;
  margin-left: 24px;
`

export const SubmitText = styled(Text)`
  margin: 44px 0;
  width: 100%;
  font-size: 35px;
  color: #b5c401;
`
