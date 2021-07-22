import React, { useEffect, useRef, useState, useCallback } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import { Animated } from 'react-native'
import { FC } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { BUTTON_THEME } from '../../components/Button/styles'
import Button from '../../components/Button'
import LoginCard from '../../components/LoginCard'
import { setRegister, setLogIn, setLoading } from '../../modules/login/actions'
import {
  LoginContentWrapper,
  LoginPageWrapper,
  ContentWrapper,
  SignUpText,
  TitleText,
  BottomText,
  LogoWrapper,
  LogoText,
  Marker,
} from './styles'
import { colors } from '../../utils'
import { getGames } from '../../modules/games/actions'
import { getSavedGames } from '../../modules/cart/actions'

interface IProps {
  navigation: any
}

const Login: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const loginPage = useSelector((state: RootStateOrAny) => state.login.loginPage)

  const [cardTitle, setCardTitle] = useState('')
  const [buttonFunction, setButtonFunction] = useState(() => {})

  const fadeAnim = useRef(new Animated.Value(0)).current

  const getToken = async () => {
    return await AsyncStorage.getItem('token')
  }

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 1,
      duration: 300,
    }).start()
  }

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      useNativeDriver: false,
      toValue: 0,
      duration: 300,
    }).start()
  }

  const handleSingUpPage = useCallback(() => {
    dispatch(setRegister())
  }, [])

  const handleLoginPage = useCallback(() => {
    dispatch(setLogIn())
  }, [])

  useEffect(() => {
    fadeOut()
    if (loginPage === 'register') {
      setCardTitle('Registration')
      setButtonFunction(handleLoginPage)
    }
    if (loginPage === 'forgetPassword') {
      setCardTitle('Reset Password')
      setButtonFunction(handleLoginPage)
    }
    if (loginPage === 'login') {
      setCardTitle('Authentication')
      setButtonFunction(handleSingUpPage)
    }
    fadeIn()
  }, [loginPage, handleLoginPage, handleSingUpPage])

  useEffect(() => {
    getToken().then((token) => {
      if (token) {
        dispatch(setLoading(true))
        dispatch(getGames())
        dispatch(getSavedGames())
        navigation.push('Home')
        dispatch(setLoading(false))
      }
    })
  }, [getGames, setLoading, navigation])

  return (
    <LoginPageWrapper>
      <ContentWrapper>
        <LoginContentWrapper>
          <LogoWrapper>
            <LogoText>TGL</LogoText>
            <Marker />
          </LogoWrapper>
          <Animated.Text
            style={[{ fontSize: 35, color: '#707070', marginBottom: 26 }, { opacity: fadeAnim }]}
          >
            {cardTitle}
          </Animated.Text>
          <LoginCard navigation={navigation} />
          <Button className={BUTTON_THEME.GHOST} onPress={buttonFunction}>
            <SignUpText>
              {loginPage === 'login' ? 'Sign Up' : 'Back'}
              <AntDesign name="arrowright" size={32} color={colors.TITLE} />
            </SignUpText>
          </Button>
        </LoginContentWrapper>
      </ContentWrapper>
      <BottomText>Copyright 2020 Luby Software</BottomText>
    </LoginPageWrapper>
  )
}

export default Login
