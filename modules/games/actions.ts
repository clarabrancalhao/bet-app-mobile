import axios from 'axios'
import { Dispatch } from 'react'
import { IGame } from '../../utils/'

export const GET_GAMES_PENDING = 'GET_GAMES_PENDING'
export const GET_GAMES_REJECT = 'GET_GAMES_REJECT'
export const GET_GAMES_FULFILLED = 'GET_GAMES_FULFILLED'
export const SELECT_GAME = 'SELECT_GAME'
export const SELECT_FILTER = 'SELECT_FILTER'

export const getGames = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getGamesPending())
    const token = localStorage.getItem('token')
    axios
      .get('http://localhost:3333/games', {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => dispatch(getGamesFulfilled(response.data)))
      .catch((error) => dispatch(getGamesReject(error)))
  }
}

export const selectGame = (game: any) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: SELECT_GAME,
      payload: game,
    })
  }
}

export const selectFilter = (game: IGame | null | undefined) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: SELECT_FILTER,
      payload: game,
    })
  }
}

const getGamesPending = () => ({
  type: GET_GAMES_PENDING,
})

const getGamesFulfilled = (games: IGame[]) => ({
  type: GET_GAMES_FULFILLED,
  payload: [...games],
})

const getGamesReject = (error: string) => ({
  type: GET_GAMES_REJECT,
  payload: error,
})
