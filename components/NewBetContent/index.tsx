import React, { useCallback } from 'react'
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
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { colors } from '../../utils'
import { useEffect } from 'react'

export default function index(containerOpacity: any) {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  const numbers = useSelector((state: RootStateOrAny) => state.cart.numbers)
  const handleRemoveNumber = useSelectNumber()
  const handleCompleteGame = useCompleteGame()
  const dispatch = useDispatch()

  const containerStyle = useAnimatedStyle(() => {
    return { opacity: containerOpacity.value }
  })

  const setOpacity0 = useCallback(() => {
    containerOpacity.value = withTiming(0, { duration: 300 })
  }, [containerOpacity])

  const setOpacity1 = useCallback(() => {
    containerOpacity.value = withTiming(0.8, { duration: 300 })
  }, [containerOpacity])

  const handleClearGame = () => {
    setOpacity0()
    setTimeout(() => dispatch(clearGame()), 200)
    setTimeout(setOpacity1, 300)
  }

  const handleAddToCart = () => {
    if (numbers.length === selectedGame['max-number']) {
      setOpacity0()
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
      setTimeout(() => dispatch(clearGame()), 200)
      setTimeout(setOpacity1, 300)
    } else {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: `You need to select ${selectedGame['max-number']} numbers`,
      })
    }
  }

  const handleRemoveOpacity = (number: number) => {
    if (numbers.length === 1) {
      setOpacity0()
      setTimeout(() => handleRemoveNumber(number), 200)
      setTimeout(setOpacity1, 300)
      return
    }
    handleRemoveNumber(number)
  }

  return (
    <Animated.View
      style={[
        {
          marginLeft: 20,
          marginRight: 20,
          marginBottom: 12,
          backgroundColor: colors.BACKGROUND,
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
                onPress={() => handleRemoveOpacity(number)}
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
