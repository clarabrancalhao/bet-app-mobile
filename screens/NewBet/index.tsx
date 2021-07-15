import React, { useRef } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Numbers from '../../components/Numbers'
import Header from '../../components/Header'
import { CloseWrapper, DrawerWrapper, TitleWrapper, Wrapper } from './styles'
import { DrawerLayoutAndroid } from 'react-native-gesture-handler'
import { Title } from '../Home/styles'
import { colors } from '../../utils'
import Button from '../../components/Button'
import { BUTTON_THEME } from '../../components/Button/styles'
import CartGames from '../../components/CartGames'

export default function index() {
  const drawer: any = useRef()
  const navigationView = () => (
    <DrawerWrapper>
      <CloseWrapper>
        <Button className={BUTTON_THEME.GHOST} onPress={() => {}}>
          <AntDesign name="close" size={24} color={colors.TGL} />
        </Button>
      </CloseWrapper>
      <TitleWrapper>
        <Ionicons name="cart-outline" size={27} color={colors.TGL} />
        <Title>CART</Title>
      </TitleWrapper>
      <CartGames
        color={colors.MEGA_SENA}
        price={2.5}
        numbers={[2, 5, 9, 3, 7, 45]}
        date={'23/11/2021'}
        type={'Mega-Sena'}
      />
    </DrawerWrapper>
  )

  return (
    <DrawerLayoutAndroid
      renderNavigationView={navigationView}
      ref={drawer}
      drawerWidth={265}
      drawerPosition={'right'}
    >
      <Wrapper>
        <Header />
        <Numbers />
      </Wrapper>
    </DrawerLayoutAndroid>
  )
}
