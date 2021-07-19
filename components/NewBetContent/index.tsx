import React, { useEffect } from 'react'
import { View, Text, FlatList } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import uuid from 'react-native-uuid'

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
} from './styles'

export default function index() {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  const numbers = useSelector((state: RootStateOrAny) => state.cart.numbers)
  const handleRemoveNumber = useSelectNumber()
  const handleCompleteGame = useCompleteGame()
  const dispatch = useDispatch()

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
      //notify(`You need to select ${selectedGame['max-number']} numbers`)
    }
  }

  return (
    <ContentWrapper>
      <Title>NEW BET FOR {selectedGame?.type.toUpperCase()}</Title>
      <Paragraph>Choose a game</Paragraph>
      <SelectGameCard type="select" />
      <Subtitle>Fill your bet</Subtitle>
      {!!numbers.length && (
        <>
          <FlatList
            style={{ flexBasis: 1, marginTop: 14, marginBottom: 14 }}
            data={numbers}
            numColumns={5}
            keyExtractor={(number) => `${number}`}
            renderItem={({ item: number }) => (
              <Button
                key={number}
                value={number}
                color={selectedGame.color}
                className={BUTTON_THEME.SMALL_CELL}
                onPress={() => handleRemoveNumber(number)}
              >
                <ButtonText>{number < 10 ? '0' + number : number}</ButtonText>
              </Button>
            )}
          />
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
        <SmallText>
          Mark as <SmallBoldText>many numbers</SmallBoldText> as you want up to a{' '}
          <SmallBoldText>
            maximum of {selectedGame ? selectedGame['max-number'] : null}
          </SmallBoldText>
        </SmallText>
      )}
    </ContentWrapper>
  )
}
