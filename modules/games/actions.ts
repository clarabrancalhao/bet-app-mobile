import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Dispatch } from 'react'
import { baseUrl, IGame } from '../../utils/'

export const GET_GAMES_PENDING = 'GET_GAMES_PENDING'
export const GET_GAMES_REJECT = 'GET_GAMES_REJECT'
export const GET_GAMES_FULFILLED = 'GET_GAMES_FULFILLED'
export const SELECT_GAME = 'SELECT_GAME'
export const SELECT_FILTER = 'SELECT_FILTER'
export const REMOVE_FILTER = 'REMOVE_FILTER'
export const getGames = () => {
  return async (dispatch: Dispatch<any>) => {
    dispatch(getGamesPending())
    const token = await AsyncStorage.getItem('token')
    axios
      .get(`${baseUrl}games`, {
        headers: { Authorization: 'Bearer ' + token },
      })
      .then((response) => dispatch(getGamesFulfilled(response.data)))
      .catch((error) => dispatch(getGamesReject(error)))
  }
}

export const selectGame = (game: IGame) => {
  return (dispatch: Dispatch<any>) => {
    dispatch({
      type: SELECT_GAME,
      payload: game,
    })
  }
}

export const removeFilter = (type: string) => ({
  payload: type,
  type: REMOVE_FILTER,
})

export const selectFilter = (game: IGame) => ({
  type: SELECT_FILTER,
  payload: game,
})

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
