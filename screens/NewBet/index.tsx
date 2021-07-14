import React from 'react'
import { View } from 'react-native'
import { RootStateOrAny, useSelector } from 'react-redux'

import Numbers from '../../components/Numbers'
import Header from '../../components/Header'
import { IGame } from '../../utils'
import SelectGameCard from '../../components/SelectGameCard'

export default function index() {
  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  return (
    <View>
      <Header />
      <Numbers />
    </View>
  )
}
