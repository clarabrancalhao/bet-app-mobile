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
import { getSavedGames } from '../../modules/cart/actions'
import { duration } from 'moment'

interface IProps {
  navigation: any
}

const Login: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const loginPage = useSelector((state: RootStateOrAny) => state.login.loginPage)

  const titleOpacity = useSharedValue(1)

  const titleStyle = useAnimatedStyle(() => ({ opacity: titleOpacity.value }))

  const getToken = async () => {
    return await AsyncStorage.getItem('token')
  }

  const handleOpacity = useCallback((opacity0, opacity1) => {
    opacity0()
    dispatch(setRegister())
    opacity1()
  }, [])

  const handleLoginPage = useCallback(() => {
    dispatch(setLogIn())
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

  useEffect(() => {
    titleOpacity.value = withTiming(0, { duration: 500 })
    changeTitle()
    titleOpacity.value = withTiming(1, { duration: 500 })
  }, [loginPage])

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
          <Animated.Text style={[{ fontSize: 35, color: '#707070', marginBottom: 26 }, titleStyle]}>
            {cardTitle}
          </Animated.Text>
          <LoginCard navigation={navigation} setOpacity={handleOpacity} />
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
