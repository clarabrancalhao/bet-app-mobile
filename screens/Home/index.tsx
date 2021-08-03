import React, { useState, useMemo } from 'react'
import { FlatList } from 'react-native-gesture-handler'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import RecentGame from '../../components/RecentGame'
import { ContentWrapper, NoGamesText, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { colors, IGame } from '../../utils'
import { ActivityIndicator } from 'react-native'
import { getFilteredGames, getSavedGames } from '../../modules/cart/actions'

interface IProps {
  navigation: any
}

export default function Home({ navigation }: IProps) {
  const selectedFilters = useSelector((state: RootStateOrAny) => state.games.selectedFilters)
  const games = useSelector((state: RootStateOrAny) => state.cart.completedGames)
  const loading = useSelector((state: RootStateOrAny) => state.login.isLoading)

  const dispatch = useDispatch()

  const [paginate, setPaginate] = useState({ page: 2, loading: false })

  const filteredGame = useMemo(() => {
    const filtered =
      selectedFilters?.length === 0
        ? games
        : games.map((game: IGame) => {
            const filter = selectedFilters.filter((filter: IGame) => {
              filter.type === game.type
            })
            if (filter.length) {
              return game
            } else return
          })

    return filtered
  }, [games, selectedFilters])

  const loadMoreGames = () => {
    if (paginate.loading) return

    setPaginate((prev) => ({ ...prev, loading: true }))

    if (selectedFilters.length) {
      dispatch(getFilteredGames(selectedFilters, paginate.page))
    }

    dispatch(getSavedGames(paginate.page))

    setPaginate((prev) => ({ page: prev.page + 1, loading: false }))
  }

  console.log(games)

  return (
    <Wrapper>
      <Header page="home" navigation={navigation} />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>

      {!loading && !games.length && <NoGamesText>You don't any have recent games.</NoGamesText>}
      {!loading && games?.length > 0 && games[0].color && (
        <FlatList
          style={{ marginLeft: 20 }}
          data={filteredGame}
          numColumns={1}
          ListFooterComponent={
            <ActivityIndicator style={{ marginTop: 50 }} color={colors.TGL} size="large" />
          }
          onEndReached={loadMoreGames}
          onEndReachedThreshold={0.1}
          keyExtractor={(game) => `${game?.id}`}
          renderItem={({ item: game }) => (
            <RecentGame
              key={game?.id}
              numbers={game?.selectedNumbers}
              date={game?.date}
              color={game?.color}
              type={game?.type}
              price={game?.price}
            />
          )}
        />
      )}
    </Wrapper>
  )
}
