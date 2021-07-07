import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { clearGame } from '../modules/cart/actions'
import { selectFilter, selectGame } from '../modules/games/actions'
import { IGame } from '../utils/'

export const useSelectGame = () => {
  const dispatch = useDispatch()
  const games: IGame[] = useSelector((state: RootStateOrAny) => state.games.results)
  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selected)
  const selectedFilter: IGame = useSelector((state: RootStateOrAny) => state.games.selectedFilter)

  const handleSelectGame = (event: React.MouseEvent<HTMLButtonElement>, type: string) => {
    const selected: IGame | undefined = games.find((game) => game.type === event.currentTarget.name)

    if (type === 'filter') {
      if (selectedFilter?.type !== selected?.type) {
        dispatch(selectFilter(selected))
      } else {
        dispatch(selectFilter(null))
      }
    }
    if (type === 'select') {
      if (selectedGame.type !== selected?.type) {
        dispatch(clearGame())
        dispatch(selectGame(selected))
      }
    }
  }

  return handleSelectGame
}
