import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import React, { useState } from 'react'
import { Text } from 'react-native'
import Toast from 'react-native-toast-message'
import Header from '../../components/Header'
import { baseUrl, colors } from '../../utils'

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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleEmailChange = (event: any) => {
    const text = event.nativeEvent.text.toLowerCase()
    setEmail(text)
  }

  const handlePasswordChange = (event: any) => {
    setPassword(event.nativeEvent.text)
  }

  const handleSaveChanges = async () => {
    try {
      const user_id = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')
      if (email !== '' && password !== '') {
        await axios.put(
          `${baseUrl}users`,
          { email, password, user_id },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        )
      }
      if (email === '' && password !== '') {
        await axios.put(
          `${baseUrl}users`,
          { password, user_id },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        )
      }
      if (password === '' && email !== '') {
        await axios.put(
          `${baseUrl}users`,
          { email, user_id },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        )
      }

      setEmail('')
      setPassword('')
      Toast.show({ type: 'success', text1: 'Success!', text2: 'New password was saved!' })
    } catch (err) {
      Toast.show({ type: 'error', text1: 'Ops!', text2: 'Try again later' })
    }
  }

  return (
    <>
      <Header page="account" navigation={navigation} />
      <Wrapper>
        <Title>Account settings</Title>
        <InputWrapper>
          <Label>Change username</Label>
          <Input value={name} />
        </InputWrapper>
        <InputWrapper>
          <Label>Change e-mail</Label>
          <Input value={email} onChange={handleEmailChange} />
        </InputWrapper>
        <InputWrapper>
          <Label>Change password</Label>
          <Input secureTextEntry={true} value={password} onChange={handlePasswordChange} />
        </InputWrapper>
        <ButtonsWrapper>
          <CancelButton onPress={() => navigation.push('Home')}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: colors.TGL }}>Cancel</Text>
          </CancelButton>
          <SaveButton onPress={handleSaveChanges}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' }}>Save</Text>
          </SaveButton>
        </ButtonsWrapper>
      </Wrapper>
    </>
  )
}
