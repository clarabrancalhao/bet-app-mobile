import React, { useRef } from 'react'
import { View } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import { ILogin } from '../../utils'
import {
  sendEmailPassword,
  setEmailError,
  setForgetPassword,
  setPasswordError,
} from '../../modules/login/actions'
import { Card, ContentWrapper, ForgetPasswordText, Input, SubmitText, Paragraph } from './styles'
import { BUTTON_THEME } from '../Button/styles'
import Button from '../Button'
import useValidate from '../../hooks/useValidate'
import { LOGIN_PAGE_LINKS } from '../../utils/'
import useAuthenticate from '../../hooks/useAuthenticate'
import { EmailError, PasswordError } from '../ErrorMessages'
import { useState } from 'react'

export default function LoginCard() {
  const dispatch = useDispatch()
  const handleValidation = useValidate()
  const handleAuthentication = useAuthenticate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login)
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)

  const handleEmailValidation = () => {
    handleValidation(email, 'email', setEmailError)
  }

  const handleEmailError = () => {
    if (login.emailError) {
      handleEmailValidation()
    }
  }

  const handlePasswordValidation = () => {
    handleValidation(password, 'password', setPasswordError)
  }

  const handlePasswordError = () => {
    if (login.passwordError) {
      handlePasswordValidation()
    }
  }

  const handleLogin = () => {
    if (loginPage === 'forgetPassword') {
      dispatch(sendEmailPassword(email))
      return
    }
    handleEmailValidation()
    handlePasswordValidation()

    if (!login.emailError && !login.passwordError) {
      handleAuthentication(email, password)
    }
  }

  const handleForgetPasswordPage = () => {
    dispatch(setForgetPassword())
  }
  return (
    <Card>
      <ContentWrapper>
        <Paragraph>Email</Paragraph>
        <Input onBlur={handleEmailValidation} onChange={handleEmailError} />
      </ContentWrapper>
      {login.emailError && <EmailError />}
      {loginPage !== 'forgetPassword' && (
        <ContentWrapper>
          <Paragraph>Password</Paragraph>
          <Input
            textContentType="password"
            onBlur={handlePasswordValidation}
            onChange={handlePasswordError}
          />
        </ContentWrapper>
      )}
      {login.passwordError && <PasswordError />}
      {loginPage === 'login' && (
        <Button className={BUTTON_THEME.GHOST} onPress={handleForgetPasswordPage}>
          <ForgetPasswordText>I forget my password</ForgetPasswordText>
        </Button>
      )}
      <Button className={BUTTON_THEME.GHOST} onPress={handleLogin}>
        <SubmitText>{LOGIN_PAGE_LINKS[loginPage]}</SubmitText>
      </Button>
    </Card>
  )
}
