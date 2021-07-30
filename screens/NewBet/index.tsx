import React, { useRef, useCallback } from 'react'
import { Ionicons, AntDesign } from '@expo/vector-icons'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { ScrollView, DrawerLayout } from 'react-native-gesture-handler'

import Numbers from '../../components/Numbers'
import Header from '../../components/Header'
import {
  Bold,
  ButtonText,
  CloseWrapper,
  DrawerWrapper,
  TitleWrapper,
  TotalText,
  TotalWrapper,
  Wrapper,
} from './styles'
import { Title } from '../Home/styles'
import { colors, formatCurrency, IGame } from '../../utils'
import Button from '../../components/Button'
import { BUTTON_THEME } from '../../components/Button/styles'
import CartGames from '../../components/CartGames'
import { clearCart, saveCart } from '../../modules/cart/actions'
import Toast from 'react-native-toast-message'
import { ActivityIndicator } from 'react-native'

export default function index({ navigation }: any) {
  const drawer: any = useRef()
  const cartGames: IGame[] = useSelector((state: RootStateOrAny) => state.cart.games)
  const totalAmount = useSelector((state: RootStateOrAny) => state.cart.totalAmount)

  const dispatch = useDispatch()

  const parsedGames = cartGames.map(({ game_id, selectedNumbers }) => ({
    game_id,
    numbers: selectedNumbers,
  }))

  const handleSaveCart = () => {
    if (cartGames.length > 0) {
      if (totalAmount > (cartGames && cartGames[0]['min-cart-value'])) {
        dispatch(saveCart(parsedGames))
        dispatch(clearCart())
        Toast.show({
          type: 'success',
          text1: 'Success!',
          text2: 'Cart saved!',
        })
      } else {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: `The min cart value is ${formatCurrency(`${cartGames[0]['min-cart-value']}`)}.`,
        })
      }
    } else {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'You need to add some games to cart',
      })
    }
  }

  const navigationView = () => (
    <DrawerWrapper>
      <CloseWrapper>
        <Button
          className={BUTTON_THEME.GHOST}
          onPress={() => {
            drawer.current.closeDrawer()
          }}
        >
          <AntDesign name="close" size={24} color={colors.TGL} />
        </Button>
      </CloseWrapper>
      <TitleWrapper>
        <Ionicons name="cart-outline" size={27} color={colors.TGL} style={{ marginRight: 12 }} />
        <Title>CART</Title>
      </TitleWrapper>

      <ScrollView>
        {cartGames.length === 0 && (
          <Title style={{ textAlign: 'center', marginTop: 150 }}>Your cart is empty</Title>
        )}
        {cartGames.length > 0 &&
          cartGames.map((game) => (
            <CartGames
              key={game.id}
              id={game.id}
              color={game.color}
              price={game.price}
              numbers={game.selectedNumbers}
              date={game.date}
              type={game.type}
            />
          ))}
      </ScrollView>

      <TotalWrapper>
        <TotalText>
          <Bold>CART</Bold> TOTAL:
        </TotalText>
        <Bold>{formatCurrency(`${totalAmount}`)}</Bold>
      </TotalWrapper>

      <Button className={BUTTON_THEME.SAVE_CART} onPress={handleSaveCart}>
        <ButtonText>
          Save <AntDesign name="arrowright" size={32} color={colors.TGL} />
        </ButtonText>
      </Button>
    </DrawerWrapper>
  )

  const handleOpenDrawer = useCallback(() => {
    drawer.current.openDrawer()
  }, [])

  return (
    <DrawerLayout
      ref={drawer}
      renderNavigationView={navigationView}
      drawerWidth={265}
      drawerPosition={'right'}
    >
      <Wrapper>
        <Header page="newBet" drawer={handleOpenDrawer} navigation={navigation} />
        <Numbers />
      </Wrapper>
    </DrawerLayout>
  )
}
