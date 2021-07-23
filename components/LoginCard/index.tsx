import React, { useState, FC, useEffect, useMemo, useCallback } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native'
import Animated, {
  withTiming,
  useAnimatedStyle,
  useSharedValue,
  Transition,
} from 'react-native-reanimated'

import { colors, ILogin } from '../../utils'
import {
  sendEmailPassword,
  setEmailError,
  setForgetPassword,
  setPasswordError,
} from '../../modules/login/actions'
import { ContentWrapper, ForgetPasswordText, Input, SubmitText, Paragraph, Card } from './styles'
import { BUTTON_THEME } from '../Button/styles'
import Button from '../Button'
import useValidate from '../../hooks/useValidate'
import { LOGIN_PAGE_LINKS } from '../../utils/'
import useAuthenticate from '../../hooks/useAuthenticate'
import { EmailError, PasswordError } from '../ErrorMessages'

interface IProps {
  navigation: any
  setOpacity: any
}

const LoginCard: FC<IProps> = ({ navigation, setOpacity }) => {
  const dispatch = useDispatch()
  const handleValidation = useValidate()
  const handleAuthentication = useAuthenticate()

  const login: ILogin = useSelector((state: RootStateOrAny) => state.login)
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)

  const height = useMemo(() => {
    if (loginPage === 'forgetPassword') {
      if (login.emailError) {
        return 250
      } else {
        return 225
      }
    } else {
      if (
        (login.emailError && !login.passwordError) ||
        (login.passwordError && !login.emailError)
      ) {
        return 375
      }
      if (login.emailError && login.passwordError) {
        return 400
      }

      return 350
    }
  }, [loginPage])

  const cardHeight = useSharedValue(height)
  const cardOpacity = useSharedValue(1)

  const cardStyle = useAnimatedStyle(() => {
    return { height: cardHeight.value, opacity: cardOpacity.value }
  })

  useEffect(() => {
    cardHeight.value = withTiming(height, { duration: 500 })
  }, [loginPage])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmailValidation = () => {
    handleValidation(email, 'email', setEmailError)
  }

  const setOpacity0 = useCallback(() => {
    cardOpacity.value = withTiming(0, { duration: 200 })
  }, [cardOpacity])

  const setOpacity1 = useCallback(() => {
    cardOpacity.value = withTiming(0, { duration: 200 })
  }, [])

  useEffect(() => {
    setOpacity(setOpacity0, setOpacity1)
  }, [])

  const handleEmailError = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setEmail(event.nativeEvent.text)
    if (login.emailError) {
      handleEmailValidation()
    }
  }

  const handlePasswordValidation = () => {
    handleValidation(password, 'password', setPasswordError)
  }

  const handlePasswordError = (event: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setPassword(event.nativeEvent.text)
    if (login.passwordError) {
      handlePasswordValidation()
    }
  }

  const handleLogin = async () => {
    if (loginPage === 'forgetPassword') {
      dispatch(sendEmailPassword(email))
      return
    }
    handleEmailValidation()
    handlePasswordValidation()

    if (!login.emailError && !login.passwordError) {
      handleAuthentication(email, password, navigation)
    }
  }

  const handleForgetPasswordPage = () => {
    dispatch(setForgetPassword())
  }

  return (
    <Animated.View
      style={[
        {
          height: 300,
          borderWidth: 1,
          borderColor: '#dddddd',
          borderRadius: 24,
          backgroundColor: '#ffffff',
          width: 306,
        },
        cardStyle,
      ]}
    >
      {loginPage === 'register' && (
        <ContentWrapper>
          <Paragraph>Name</Paragraph>
          <Input onChange={() => {}} />
        </ContentWrapper>
      )}
      <ContentWrapper>
        <Paragraph>Email</Paragraph>
        <Input onBlur={handleEmailValidation} onChange={handleEmailError} />
      </ContentWrapper>
      {login.emailError && <EmailError />}
      {loginPage !== 'forgetPassword' && (
        <ContentWrapper>
          <Paragraph>Password</Paragraph>
          <Input
            secureTextEntry={true}
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
        <SubmitText>
          {LOGIN_PAGE_LINKS[loginPage]}
          <AntDesign name="arrowright" size={32} color={colors.TGL} />
        </SubmitText>
      </Button>
    </Animated.View>
  )
}

export default LoginCard
