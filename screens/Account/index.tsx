import React from 'react'
import { View, Text, TextInput } from 'react-native'
import Header from '../../components/Header'

import { Wrapper, Input, InputWrapper, Label, Title } from './styles'

export default function index() {
  return (
    <>
      <Header page="account" navigation />
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
      </Wrapper>
    </>
  )
}
