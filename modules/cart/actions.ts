import axios from 'axios'
import { Dispatch } from 'react'
import { IGame, ISaveGame } from '../../utils/'

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

export const removeFromCart = (game: IGame) => ({
  type: REMOVE_FROM_CART,
  payload: game,
})

export const clearGame = () => ({
  type: CLEAR_GAME,
})

export const clearCart = () => ({
  type: CLEAR_CART,
})

export const saveCart = (games: ISaveGame[]) => {
  return (dispatch: Dispatch<any>) => {
    dispatch(saveCartPending())
    const userId = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    axios
      .post(
        `http://localhost:3333/users/${userId}/bets`,
        { bets: games },
        {
          headers: {
            Authorization: 'Bearer ' + token,
          },
        }
      )
      .then(() => {
        dispatch(saveCartCompleted())
        dispatch(clearCart())
      })
      .catch((error) => dispatch(saveCartReject(error.message)))
  }
}

export const getSavedGames = () => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getGamesPending())
    const userId = localStorage.getItem('user_id')
    const token = localStorage.getItem('token')
    axios
      .get(`http://localhost:3333/users/${userId}/bets`, {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      })
      .then((response) => {
        dispatch(getGamesCompleted(response.data))
      })
      .catch((error) => {
        dispatch(getGamesReject(error))
        //NOTIFICAÇAO
      })
  }
}

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
