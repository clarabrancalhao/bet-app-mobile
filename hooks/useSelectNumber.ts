import React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Toast from 'react-native-toast-message'

import { addNumber, removeNumber } from '../modules/cart/actions'
import { IGame } from '../utils/'

const useSelectNumber = () => {
  const dispatch = useDispatch()

  const selectedNumbers: number[] = useSelector((state: RootStateOrAny) => state.cart.numbers)
  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)

  const handleSelectNumber = (curNumber: number) => {
    const selected = selectedNumbers.length
    const isSelected = selectedNumbers.find((number: number) => number === curNumber)

    if (!isSelected) {
      if (selected < selectedGame['max-number']) {
        dispatch(addNumber(curNumber))
      } else {
        Toast.show({
          type: 'error',
          text1: 'Ops!',
          text2: `You can select only ${selectedGame['max-number']} numbers`,
        })
      }
    } else {
      dispatch(removeNumber(curNumber))
    }
  }

  return handleSelectNumber
}

export default useSelectNumber
