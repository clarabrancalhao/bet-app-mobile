import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import RecentGame from '../../components/RecentGame'
import { ContentWrapper, NoGamesText, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../modules/games/actions'
import { colors, IGame } from '../../utils'
import { ActivityIndicator } from 'react-native'

interface IProps {
  navigation: any
}

export default function Home({ navigation }: IProps) {
  const selectedFilters = useSelector((state: RootStateOrAny) => state.games.selectedFilters)
  const games = useSelector((state: RootStateOrAny) => state.cart.completedGames)
  const loading = useSelector((state: RootStateOrAny) => state.login.isLoading)

  return (
    <Wrapper>
      <Header page="home" navigation={navigation} />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
      {loading && <ActivityIndicator style={{ marginTop: 50 }} color={colors.TGL} size="large" />}
      {!loading && games.length === 0 && <NoGamesText>You don't have recent games.</NoGamesText>}
      {!loading && games.length > 0 && (
        <ScrollView style={{ marginLeft: 20 }}>
          {selectedFilters?.length === 0 &&
            games.map((game: IGame) => (
              <RecentGame
                key={game.id}
                numbers={game.selectedNumbers}
                date={game.date}
                color={game.color}
                type={game.type}
                price={game.price}
              />
            ))}
          {selectedFilters.length > 0 &&
            games.map((game: IGame) => {
              const test = selectedFilters.find((filter: IGame) => filter.type === game.type)
              if (test) {
                return (
                  <RecentGame
                    key={game.id}
                    numbers={game.selectedNumbers}
                    date={game.date}
                    color={game.color}
                    type={game.type}
                    price={game.price}
                  />
                )
              } else return
            })}
        </ScrollView>
      )}
    </Wrapper>
  )
}
