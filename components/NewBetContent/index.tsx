import React from 'react'
import { Animated } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'
import { FlatGrid } from 'react-native-super-grid'

import useCompleteGame from '../../hooks/useCompleteGame'
import useSelectNumber from '../../hooks/useSelectNumber'
import { addGameToCart, clearGame } from '../../modules/cart/actions'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'

import SelectGameCard from '../SelectGameCard'
import {
  ContentWrapper,
  Title,
  Paragraph,
  SmallBoldText,
  SmallText,
  Subtitle,
  ButtonsWrapper,
  GreenText,
  WhiteText,
  ButtonText,
  NumbersWrapper,
} from './styles'
import Toast from 'react-native-toast-message'
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { colors } from '../../utils'
import { useEffect } from 'react'

export default function index() {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  const numbers = useSelector((state: RootStateOrAny) => state.cart.numbers)
  const handleRemoveNumber = useSelectNumber()
  const handleCompleteGame = useCompleteGame()
  const dispatch = useDispatch()

  const containerHeight = useSharedValue(400)
  const containerStyle = useAnimatedStyle(() => ({ height: containerHeight.value }))

  const handleClearGame = () => {
    dispatch(clearGame())
  }

  const handleAddToCart = () => {
    if (numbers.length === selectedGame['max-number']) {
      dispatch(
        addGameToCart({
          id: uuid.v4(),
          game_id: selectedGame.id,
          date: Date.now(),
          type: selectedGame.type,
          price: selectedGame.price,
          selectedNumbers: numbers,
          color: selectedGame.color,
          'min-cart-value': selectedGame['min-cart-value'],
        })
      )
      dispatch(clearGame())
    } else {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: `You need to select ${selectedGame['max-number']} numbers`,
      })
    }
  }

  useEffect(() => {
    if (numbers.length === 0) {
      containerHeight.value = withTiming(400, { duration: 300 })
      return
    }
    if (numbers.length < 9) {
      containerHeight.value = withTiming(350, { duration: 300 })
    } else {
      containerHeight.value = withTiming(375, { duration: 300 })
    }
  }, [numbers])

  return (
    <Animated.View
      style={[
        {
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 12,
          backgroundColor: colors.BACKGROUND,
          opacity: 0.8,
        },
        containerStyle,
      ]}
    >
      <Title>NEW BET FOR {selectedGame?.type.toUpperCase()}</Title>
      <Paragraph>Choose a game</Paragraph>
      <SelectGameCard type="select" />
      {!!numbers.length && (
        <>
          <NumbersWrapper>
            {numbers.map((number: number) => (
              <Button
                key={number}
                value={number}
                color={selectedGame.color}
                size={40}
                className={BUTTON_THEME.NUMBER_CELL_ACTIVE}
                onPress={() => handleRemoveNumber(number)}
              >
                <ButtonText>{number < 10 ? '0' + number : number}</ButtonText>
              </Button>
            ))}
          </NumbersWrapper>
          <ButtonsWrapper>
            <Button
              className={BUTTON_THEME.GREEN_BORDER}
              onPress={() => {
                handleCompleteGame(numbers, selectedGame)
              }}
            >
              <GreenText>Complete Game</GreenText>
            </Button>
            <Button
              className={BUTTON_THEME.GREEN_BORDER}
              onPress={() => {
                handleClearGame()
              }}
            >
              <GreenText>Clear Game</GreenText>
            </Button>
            <Button
              className={BUTTON_THEME.ADD_TO_CART}
              onPress={() => {
                handleAddToCart()
              }}
            >
              <WhiteText>Add To Cart</WhiteText>
            </Button>
          </ButtonsWrapper>
        </>
      )}
      {!numbers.length && (
        <>
          <Subtitle>Fill your bet</Subtitle>
          <SmallText>{selectedGame.description}</SmallText>
        </>
      )}
    </Animated.View>
  )
}
