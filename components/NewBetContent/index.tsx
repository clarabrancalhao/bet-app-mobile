import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import useCompleteGame from '../../hooks/useCompleteGame'
import useSelectNumber from '../../hooks/useSelectNumber'
import { clearGame } from '../../modules/cart/actions'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'
import { ButtonText } from '../Numbers/styles'

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

  return (
    <ContentWrapper>
      <Title>NEW BET FOR {selectedGame?.type.toUpperCase()}</Title>
      <Paragraph>Choose a game</Paragraph>
      <SelectGameCard type="select" />
      <Subtitle>Fill your bet</Subtitle>
      {!!numbers.length && (
        <>
          <FlatList
            style={{ flexBasis: 0 }}
            contentContainerStyle={{ alignItems: 'center' }}
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
            <Button className={BUTTON_THEME.ADD_TO_CART} onPress={() => {}}>
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
