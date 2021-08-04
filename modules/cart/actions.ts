import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import { Dispatch } from 'react'
import Toast from 'react-native-toast-message'
import { baseUrl, IGame, ISaveGame } from '../../utils/'
import { setLoading } from '../login/actions'

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const ADD_NUMBER = 'ADD_NUMBER'
export const REMOVE_NUMBER = 'REMOVE_NUMBER'
export const COMPLETE_GAME = 'COMPLETE_GAME'
export const CLEAR_GAME = 'CLEAR_GAME'
export const SAVE_CART_COMPLETED = 'SAVE_CART_COMPLETED'
export const SAVE_CART_REJECTED = 'SAVE_CART_REJECTED'
export const SAVE_CART_PENDING = 'SAVE_CART_PENDING'
export const GET_GAMES_PENDING = 'GET_GAMES_PENDING'
export const GET_GAMES_COMPLETED = 'GET_GAMES_COMPLETED'
export const GET_GAMES_REJECTED = 'GET_GAMES_REJECTED'
export const CLEAR_CART = 'CLEAR_CART'
export const CLEAR_SAVED_GAMES = 'CLEAR_SAVED_GAMES'

export const completeGame = (numbers: number[]) => ({
  type: COMPLETE_GAME,
  payload: numbers,
})

export const addNumber = (number: number) => ({
  type: ADD_NUMBER,
  payload: number,
})

export const removeNumber = (number: number) => ({
  type: REMOVE_NUMBER,
  payload: number,
})

export const addGameToCart = (game: IGame) => ({
  type: ADD_TO_CART,
  payload: game,
})

export const removeFromCart = (id: string, price: number) => ({
  type: REMOVE_FROM_CART,
  payload: { id, price },
})

export const clearGame = () => ({
  type: CLEAR_GAME,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})

export const saveCart = (games: ISaveGame[]) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      const userId = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')

      await axios.post(
        `${baseUrl}users/${userId}/bets`,
        { bets: games },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )

      getSavedGames(1)
    } catch (error) {
      console.log(error)
      dispatch(saveCartReject(error.message))
    }
  }
}

export const getFilteredGames = (selectedFilters: IGame[]) => {
  return async (dispatch: Dispatch<any>) => {
    if (selectedFilters.length === 3) {
      getSavedGames(1)
      return
    }
    const filters =
      selectedFilters.length === 1
        ? `?game_id=${selectedFilters[0].id}`
        : `?game_id=${selectedFilters[0].id}&game_id_2=${selectedFilters[1].id}`

    try {
      dispatch(setLoading(true))
      const userId = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')
      const response = await axios.get(`${baseUrl}users/${userId}/bets${filters}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      console.log({ response: response.data })
      dispatch(getGamesCompleted(response.data))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(getGamesReject(error))
      dispatch(setLoading(false))
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Try again later.',
      })
    }
  }
}

export const getSavedGames = (page: number) => {
  return async (dispatch: Dispatch<any>) => {
    try {
      dispatch(setLoading(true))
      const userId = await AsyncStorage.getItem('user_id')
      const token = await AsyncStorage.getItem('token')

      if (page === 1) {
        dispatch(clearSavedGames())
      }
      const response = await axios.get(`${baseUrl}users/${userId}/bets?page=${page}`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })

      dispatch(getGamesCompleted(response.data.data))
      dispatch(setLoading(false))
    } catch (error) {
      dispatch(getGamesReject(error))
      dispatch(setLoading(false))
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: 'Try again later.',
      })
    }
  }
}

export const clearSavedGames = () => ({
  type: CLEAR_SAVED_GAMES,
})

const saveCartPending = () => ({
  type: SAVE_CART_PENDING,
})

const saveCartCompleted = () => ({
  type: SAVE_CART_COMPLETED,
})

const saveCartReject = (error: string) => ({
  type: SAVE_CART_REJECTED,
  payload: error,
})

const getGamesPending = () => ({
  type: GET_GAMES_PENDING,
})

const getGamesCompleted = (games: IGame) => ({
  type: GET_GAMES_COMPLETED,
  payload: games,
})

const getGamesReject = (error: string) => ({
  type: GET_GAMES_REJECTED,
  payload: error,
})
