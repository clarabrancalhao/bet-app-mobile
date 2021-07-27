import React, { useEffect, useState, useCallback, FC, useMemo } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Animated, { withTiming, useSharedValue, useAnimatedStyle } from 'react-native-reanimated'

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
import { ActivityIndicator, View } from 'react-native'

interface IProps {
  navigation: any
}

const Login: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const loginPage = useSelector((state: RootStateOrAny) => state.login.loginPage)
  const loading = useSelector((state: RootStateOrAny) => state.login.isLoading)

  const cardOpacity = useSharedValue(1)

  const titleStyle = useAnimatedStyle(() => ({ opacity: cardOpacity.value }))

  const getToken = async () => {
    return await AsyncStorage.getItem('token')
  }

  const setOpacity0 = useCallback(() => {
    cardOpacity.value = withTiming(0, { duration: 200 })
  }, [cardOpacity])

  const setOpacity1 = useCallback(() => {
    cardOpacity.value = withTiming(1, { duration: 200 })
  }, [cardOpacity])

  const handleOpacity = useCallback(() => {
    setOpacity0()
    setTimeout(() => dispatch(setRegister()), 100)
    changeTitle()
    setTimeout(setOpacity1, 200)
  }, [])

  const handleLoginPage = useCallback(() => {
    setOpacity0()
    setTimeout(() => dispatch(setLogIn()), 100)
    changeTitle()
    setTimeout(setOpacity1, 200)
  }, [])

  const [cardTitle, setCardTitle] = useState('Authentication')

  const changeTitle = () => {
    if (loginPage === 'register') {
      setCardTitle('Registration')
    }
    if (loginPage === 'forgetPassword') {
      setCardTitle('Reset Password')
    }
    if (loginPage === 'login') {
      setCardTitle('Authentication')
    }
  }

  const buttonFunction = useMemo(() => {
    if (loginPage === 'register') {
      return handleLoginPage
    }
    if (loginPage === 'forgetPassword') {
      return handleLoginPage
    }
    if (loginPage === 'login') {
      return handleOpacity
    }
  }, [loginPage])

  if (loading) {
    return (
      <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color={colors.TGL} size="large" />
      </View>
    )
  }

  return (
    <LoginPageWrapper>
      <ContentWrapper>
        <LoginContentWrapper>
          <LogoWrapper>
            <LogoText>TGL</LogoText>
            <Marker />
          </LogoWrapper>
          <Animated.Text style={[{ fontSize: 35, color: '#707070', marginBottom: 26 }, titleStyle]}>
            {cardTitle}
          </Animated.Text>
          <LoginCard navigation={navigation} opacity={cardOpacity} />
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
