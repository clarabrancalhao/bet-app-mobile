import React from 'react'
import { Text } from 'react-native'
import Header from '../../components/Header'
import { colors } from '../../utils'

import {
  Wrapper,
  Input,
  InputWrapper,
  Label,
  Title,
  ButtonsWrapper,
  CancelButton,
  SaveButton,
} from './styles'

export default function index({ navigation }: any) {
  return (
    <>
      <Header page="account" navigation={navigation} />
      <Wrapper>
        <Title>Account settings</Title>
        <InputWrapper>
          <Label>Change username</Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label>Change e-mail</Label>
          <Input />
        </InputWrapper>
        <InputWrapper>
          <Label>Change password</Label>
          <Input />
        </InputWrapper>
        <ButtonsWrapper>
          <CancelButton onPress={() => {}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.TGL }}>Cancel</Text>
          </CancelButton>
          <SaveButton onPress={() => {}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>Save</Text>
          </SaveButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  )
}
