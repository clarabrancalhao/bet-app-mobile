import { useDispatch } from 'react-redux'
import { completeGame } from '../modules/cart/actions'
import { IGame } from '../utils'
import Toast from 'react-native-toast-message'

const useCompleteGame = () => {
  const dispatch = useDispatch()

  const handleCompleteGame = (selectedNumbers: number[], selectedGame: IGame) => {
    if (selectedNumbers.length === selectedGame['max-number']) {
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: `Your game is already completed!`,
      })
      return
    }
    const randomNumbers = getRandomNumbers(selectedGame, selectedNumbers)
    dispatch(completeGame(randomNumbers))
  }

  function getRandomNumbers(game: { 'max-number': number; range: number }, numbers: number[]) {
    let randomNumbers: number[] = [...numbers]

    for (let i = 1; i < game['max-number']; i) {
      const random = Math.floor(Math.random() * (game.range - 1)) + 1
      randomNumbers.push(random)
      const uniqueRandomNumbers = [...Array.from(new Set(randomNumbers))]
      randomNumbers = uniqueRandomNumbers.sort(function (a, b) {
        return a - b
      })
      i = uniqueRandomNumbers.length
    }

    return randomNumbers
  }

  return handleCompleteGame
}

export default useCompleteGame
