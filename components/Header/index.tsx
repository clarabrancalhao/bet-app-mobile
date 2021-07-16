import React from 'react'
import { MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'

import { Wrapper, LogoText, LogoWrapper, Marker, IconsWrapper } from './style'
import { colors } from '../../utils'
import { setUserLogged } from '../../modules/login/actions'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

export interface IProps {
  page: string
  drawer?: () => void
  navigation: any
}

const Header = ({ page, drawer, navigation }: IProps) => {
  const dispatch = useDispatch()

  const handleLogout = async () => {
    dispatch(setUserLogged(false))
    await AsyncStorage.removeItem('token')
    navigation.push('Login')
  }

  return (
    <Wrapper>
      <LogoWrapper>
        <LogoText>TGL</LogoText>
        <Marker />
      </LogoWrapper>
      <IconsWrapper>
        {page === 'newBet' && (
          <Button className={BUTTON_THEME.GHOST} onPress={drawer}>
            <Ionicons
              name="cart-outline"
              size={32}
              color={colors.TGL}
              style={{ marginRight: 30 }}
            />
          </Button>
        )}
        <Button className={BUTTON_THEME.GHOST} onPress={handleLogout}>
          <MaterialIcons name="logout" size={32} color="#c1c1c1" />
        </Button>
      </IconsWrapper>
    </Wrapper>
  )
}

export default Header
