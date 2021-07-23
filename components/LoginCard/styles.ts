import styled from 'styled-components'
import { View, Text, TextInput } from 'react-native'

export const ContentWrapper = styled(View)`
  flex-direction: column;
  padding: 0 30px;
  width: 100%;
  border-bottom-color: #ebebeb;
  border-bottom-width: 1px;
`

export const Card = styled(View)`
  border: 1px solid #dddddd;
  border-radius: 24px;
  background-color: #ffffff;
  width: 306px;
`

export const Paragraph = styled(Text)`
  color: #9d9d9d;
  font-size: 17px;
  margin-top: 30px;
`

export const Input = styled(TextInput)`
  font-size: 16px;
  border: none;
`

export const ForgetPasswordText = styled(Text)`
  padding-top: 22px;
  margin-right: 20px;
  text-align: right;
  color: #c1c1c1;
  font-weight: 400;
  font-size: 17px;
  align-self: flex-end;
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
  text-align: center;
`
