import React from 'react'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import { ContentWrapper, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../modules/games/actions'

interface IProps {
  navigation: any
}

export default function Home({ navigation }: IProps) {
  const selectedGame = useSelector((state: RootStateOrAny) => state.games.selected)

  return (
    <Wrapper>
      <Header page="home" navigation={navigation} />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
    </Wrapper>
  )
}
