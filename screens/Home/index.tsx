import React from 'react'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import { ContentWrapper, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../modules/games/actions'

export default function Home() {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selected)

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
    </Wrapper>
  )
}
