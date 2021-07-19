import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

import SelectGameCard from '../../components/SelectGameCard'
import Header from '../../components/Header'
import RecentGame from '../../components/RecentGame'
import { ContentWrapper, Paragraph, Title, Wrapper } from './styles'
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { getGames } from '../../modules/games/actions'
import { IGame } from '../../utils'

interface IProps {
  navigation: any
}

export default function Home({ navigation }: IProps) {
  const selectedFilters = useSelector((state: RootStateOrAny) => state.games.selectedFilters)
  const games = useSelector((state: RootStateOrAny) => state.cart.completedGames)

  return (
    <Wrapper>
      <Header page="home" navigation={navigation} />
      <ContentWrapper>
        <Title>RECENT GAMES</Title>
        <Paragraph>Filters</Paragraph>
        <SelectGameCard type="filter" />
      </ContentWrapper>
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
        {
          selectedFilters.length > 0 &&
            games.filter((game: IGame) => {
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
              }
            })
          // selectedFilters.map((filter: IGame) => {
          //   const filteredGames = games.filter((game: IGame) => game.type === filter.type)
          //   return filteredGames.map((filtered: IGame) => (
          //     <RecentGame
          //       key={filtered.id}
          //       numbers={filtered.selectedNumbers}
          //       date={filtered.date}
          //       color={filtered.color}
          //       type={filtered.type}
          //       price={filtered.price}
          //     />
          //   ))
          // })}
        }
      </ScrollView>
    </Wrapper>
  )
}
