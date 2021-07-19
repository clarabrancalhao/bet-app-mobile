import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons'

import { BUTTON_THEME } from '../../components/Button/styles'
import Button from '../../components/Button'
import LoginCard from '../../components/LoginCard'
//import Title from '../../components/Title';
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
import { FC } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { getGames } from '../../modules/games/actions'
import { getSavedGames } from '../../modules/cart/actions'

interface IProps {
  navigation: any
}

const Login: FC<IProps> = ({ navigation }) => {
  const dispatch = useDispatch()
  const loginPage = useSelector((state: RootStateOrAny) => state.login.loginPage)

  const getToken = async () => {
    return await AsyncStorage.getItem('token')
  }

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

  const handleSingUpPage = () => {
    dispatch(setRegister())
  }

  const handleLoginPage = () => {
    dispatch(setLogIn())
  }

  let cardTitle
  let buttonFunction

  if (loginPage === 'register') {
    cardTitle = 'Registration'
    buttonFunction = handleLoginPage
  }
  if (loginPage === 'forgetPassword') {
    cardTitle = 'Reset Password'
    buttonFunction = handleLoginPage
  }
  if (loginPage === 'login') {
    cardTitle = 'Authentication'
    buttonFunction = handleSingUpPage
  }

  return (
    <LoginPageWrapper>
      <ContentWrapper>
        <LoginContentWrapper>
          <LogoWrapper>
            <LogoText>TGL</LogoText>
            <Marker />
          </LogoWrapper>
          <TitleText>{cardTitle}</TitleText>
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
