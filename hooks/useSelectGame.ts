import React from 'react'
import { NativeSyntheticEvent } from 'react-native'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
  clearGame,
  clearSavedGames,
  getFilteredGames,
  getSavedGames,
} from '../modules/cart/actions'
import { removeFilter, selectFilter, selectGame } from '../modules/games/actions'
import { IGame } from '../utils/'

export const useSelectGame = () => {
  const dispatch = useDispatch()
  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  const selectedFilters: IGame[] = useSelector(
    (state: RootStateOrAny) => state.games.selectedFilters
  )

  const handleSelectGame = (game: IGame, type: string) => {
    if (type === 'filter') {
      if (selectedFilters.length === 0) {
        dispatch(clearSavedGames())
        dispatch(selectFilter(game))
        dispatch(getFilteredGames([game]))
        return
      }
      if (selectedFilters?.find((filter) => filter.type === game.type)) {
        dispatch(removeFilter(game.type))
        dispatch(clearSavedGames())
        if (selectedFilters.length === 1) {
          dispatch(getSavedGames(1))
          return
        }
        const filteredGames = selectedFilters.filter((filter) => filter.type !== game.type)
        dispatch(getFilteredGames(filteredGames))
        return
      } else {
        dispatch(clearSavedGames())
        dispatch(selectFilter(game))
        dispatch(getFilteredGames([...selectedFilters, game]))
        return
      }
    }

    if (type === 'select') {
      if (selectedGame?.type !== game.type) {
        dispatch(clearGame())
        dispatch(selectGame(game))
      } else {
        return
      }
    }
  }

  return handleSelectGame
}
