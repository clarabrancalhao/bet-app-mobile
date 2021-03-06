import React, { useMemo } from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { FlatList } from 'react-native'

import useSelectNumber from '../../hooks/useSelectNumber'
import { IGame } from '../../utils'
import Button from '../Button'
import NewBetContent from '../NewBetContent'
import { BUTTON_THEME } from '../Button/styles'
import { Wrapper, ButtonText } from './styles'
import { useSharedValue, withTiming } from 'react-native-reanimated'
import { useCallback } from 'react'
import { duration } from 'moment'

export default function Numbers() {
  const handleSelectNumber = useSelectNumber()
  const selectedNumbers: number[] = useSelector((state: RootStateOrAny) => state.cart.numbers)

  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)

  const numbers: number[] = useMemo(
    () => Array.from({ length: selectedGame?.range }, (_, i) => i + 1),
    [selectedGame]
  )

  const containerOpacity = useSharedValue(0.8)

  const setOpacity0 = useCallback(() => {
    containerOpacity.value = withTiming(0, { duration: 200 })
  }, [containerOpacity])

  const setOpacity1 = useCallback(() => {
    containerOpacity.value = withTiming(0.8, { duration: 200 })
  }, [containerOpacity])

  const handleSelectedNumber = (number: number) => {
    if (selectedNumbers.length === 0) {
      containerOpacity.value = withTiming(0, { duration: 300 })
      setTimeout(() => handleSelectNumber(number), 200)
      setTimeout(setOpacity1, 300)
      return
    }
    if (selectedNumbers.length === 1 && selectedNumbers[0] === number) {
      containerOpacity.value = withTiming(0, { duration: 300 })
      setTimeout(() => handleSelectNumber(number), 200)
      setTimeout(setOpacity1, 300)
    }
    handleSelectNumber(number)
  }

  return (
    <Wrapper>
      <FlatList
        style={{ flexBasis: 0, marginBottom: 200 }}
        contentContainerStyle={{ alignItems: 'center' }}
        data={numbers}
        ListHeaderComponent={() => NewBetContent(containerOpacity)}
        stickyHeaderIndices={[0]}
        numColumns={5}
        keyExtractor={(number: number) => `${number}`}
        renderItem={({ item: number }) => (
          <Button
            key={number}
            value={number}
            color={selectedGame.color}
            size={59}
            className={
              !selectedNumbers?.find((selected: number) => selected === number)
                ? BUTTON_THEME.NUMBER_CELL
                : BUTTON_THEME.NUMBER_CELL_ACTIVE
            }
            onPress={() => handleSelectedNumber(number)}
          >
            <ButtonText>{number < 10 ? '0' + number : number}</ButtonText>
          </Button>
        )}
      />
    </Wrapper>
  )
}
