import React, { useMemo } from 'react'
import { View, Text } from 'react-native'
import { useSelector, RootStateOrAny } from 'react-redux'
import useSelectNumber from '../../hooks/useSelectNumber'
import { IGame } from '../../utils'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'

import {} from './styles'

export default function Numbers() {
  const handleSelectNumber = useSelectNumber()
  const selectedNumbers: number[] = useSelector((state: RootStateOrAny) => state.cart.numbers)

  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selected)

  const numbers = useMemo(
    () => Array.from({ length: selectedGame?.range }, (_, i) => i + 1),
    [selectedGame]
  )

  console.log({ numbers })
  return (
    <View>
      {numbers.map((number) => (
        <Button
          key={number}
          value={number}
          color={selectedGame.color}
          className={
            !selectedNumbers?.find((selected: number) => selected === number)
              ? BUTTON_THEME.NUMBER_CELL
              : BUTTON_THEME.NUMBER_CELL_ACTIVE
          }
          onPress={handleSelectNumber}
        >
          {number < 10 ? '0' + number : number}
        </Button>
      ))}
    </View>
  )
}
