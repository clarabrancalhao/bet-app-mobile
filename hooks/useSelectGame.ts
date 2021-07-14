import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { clearGame } from '../modules/cart/actions'
import { removeFilter, selectFilter, selectGame } from '../modules/games/actions'
import { IGame } from '../utils/'

export const useSelectGame = () => {
  const dispatch = useDispatch()
  const selectedGame: IGame[] = useSelector((state: RootStateOrAny) => state.games.selected)
  const selectedFilter: IGame[] = useSelector((state: RootStateOrAny) => state.games.selectedFilter)

  const handleSelectGame = (game: IGame, type: string) => {
    if (type === 'filter') {
      if (selectedFilter?.find((filter) => filter.type === game.type)) {
        dispatch(removeFilter(game.type))
      } else {
        dispatch(selectFilter(game))
      }
    }
    if (type === 'select') {
      if (selectedGame[0].type !== game.type) {
        dispatch(clearGame())
        dispatch(selectGame(game))
      } else {
        return
      }
    }
  }

  return handleSelectGame
}
