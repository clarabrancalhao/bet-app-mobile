import React, { useMemo } from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'
import { FlatList } from 'react-native'

import useSelectNumber from '../../hooks/useSelectNumber'
import { IGame } from '../../utils'
import Button from '../Button'
import NewBetContent from '../NewBetContent'
import { BUTTON_THEME } from '../Button/styles'
import { Wrapper, ButtonText } from './styles'

export default function Numbers() {
  const handleSelectNumber = useSelectNumber()
  const selectedNumbers: number[] = useSelector((state: RootStateOrAny) => state.cart.numbers)

  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)

  const numbers: number[] = useMemo(
    () => Array.from({ length: selectedGame?.range }, (_, i) => i + 1),
    [selectedGame]
  )

  return (
    <Wrapper>
      <FlatList
        style={{ flexBasis: 0, marginBottom: 200 }}
        contentContainerStyle={{ alignItems: 'center' }}
        data={numbers}
        ListHeaderComponent={NewBetContent}
        stickyHeaderIndices={[0]}
        numColumns={5}
        keyExtractor={(number: number) => `${number}`}
        renderItem={({ item: number }) => (
          <Button
            key={number}
            value={number}
            color={selectedGame.color}
            className={
              !selectedNumbers?.find((selected: number) => selected === number)
                ? BUTTON_THEME.NUMBER_CELL
                : BUTTON_THEME.NUMBER_CELL_ACTIVE
            }
            onPress={() => handleSelectNumber(number)}
          >
            <ButtonText>{number < 10 ? '0' + number : number}</ButtonText>
          </Button>
        )}
      />
    </Wrapper>
  )
}
