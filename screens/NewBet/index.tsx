import React, { useRef } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import Numbers from '../../components/Numbers'
import Header from '../../components/Header'
import { CloseWrapper, DrawerWrapper, TitleWrapper, Wrapper } from './styles'
import { DrawerLayoutAndroid } from 'react-native-gesture-handler'
import { Title } from '../Home/styles'
import { colors, IGame } from '../../utils'
import Button from '../../components/Button'
import { BUTTON_THEME } from '../../components/Button/styles'
import CartGames from '../../components/CartGames'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useCallback } from 'react'

export default function index({ navigation }: any) {
  const drawer: any = useRef()
  const cartGames: IGame[] = useSelector((state: RootStateOrAny) => state.cart.games)
  const totalAmount = useSelector((state: RootStateOrAny) => state.cart.totalAmount)

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
      {cartGames.map((game) => (
        <CartGames
          key={game.id}
          color={game.color}
          price={game.price}
          numbers={game.selectedNumbers}
          date={game.date}
          type={game.type}
        />
      ))}
    </DrawerWrapper>
  )

  const handleOpenDrawer = useCallback(() => {
    drawer.current.openDrawer()
  }, [])

  return (
    <DrawerLayoutAndroid
      renderNavigationView={navigationView}
      ref={drawer}
      drawerWidth={265}
      drawerPosition={'right'}
    >
      <Wrapper>
        <Header page="newBet" drawer={handleOpenDrawer} navigation={navigation} />
        <Numbers />
      </Wrapper>
    </DrawerLayoutAndroid>
  )
}
