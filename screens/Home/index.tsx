import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import RecentGame from '../../components/RecentGame'
import { ContentWrapper, NoGamesText, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../modules/games/actions'
import { colors, IGame } from '../../utils'
import { ActivityIndicator } from 'react-native'
import { useMemo } from 'react'

interface IProps {
  navigation: any
}

export default function Home({ navigation }: IProps) {
  const selectedFilters = useSelector((state: RootStateOrAny) => state.games.selectedFilters)
  const games = useSelector((state: RootStateOrAny) => state.cart.completedGames)
  const loading = useSelector((state: RootStateOrAny) => state.login.isLoading)

  console.log({ selectedFilters: selectedFilters.length })

  const filteredGame = useMemo(() => {
    const filtered =
      selectedFilters?.length === 0
        ? games
        : games.map((game: IGame) => {
            const filter = selectedFilters.filter((filter: IGame) => filter.type === game.type)
            if (filter) {
              return game
            } else return
          })

    return filtered
  }, [games, selectedFilters])

  console.log(filteredGame)

  return (
    <Wrapper>
      <Header page="home" navigation={navigation} />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
      {loading && <ActivityIndicator style={{ marginTop: 50 }} color={colors.TGL} size="large" />}
      {!loading && games.length === 0 && (
        <NoGamesText>You don't any have recent games.</NoGamesText>
      )}
      {!loading && games.length > 0 && (
        <FlatList
          style={{ marginLeft: 20 }}
          data={filteredGame}
          keyExtractor={(game) => game.id}
          renderItem={({ item: game }) => (
            <RecentGame
              key={game.id}
              numbers={game.selectedNumbers}
              date={game.date}
              color={game.color}
              type={game.type}
              price={game.price}
            />
          )}
        />
      )}
    </Wrapper>
  )
}
