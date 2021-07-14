import React from 'react'
import { View, Text } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'

import SelectGameCard from '../SelectGameCard'
import { ContentWrapper, Title, Paragraph, SmallBoldText, SmallText, Subtitle } from './styles'

export default function index() {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  return (
    <ContentWrapper>
      <Title>NEW BET FOR {selectedGame.type.toUpperCase()}</Title>
      <Paragraph>Choose a game</Paragraph>
      <SelectGameCard type="select" />
      <Subtitle>Fill your bet</Subtitle>
      <SmallText>
        Mark as <SmallBoldText>many numbers</SmallBoldText> as you want up to a{' '}
        <SmallBoldText>maximum of {selectedGame['max-number']}</SmallBoldText>
      </SmallText>
    </ContentWrapper>
  )
}
