import React, { FC } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'

import { useSelectGame } from '../../hooks/useSelectGame'
import { IGame } from '../../utils/'
import { BUTTON_THEME } from '../Button/styles'
import Button from '../Button'
import { ButtonText, ContentWrapper } from './styles'
import { NativeSyntheticEvent } from 'react-native'

const SelectGameCard: FC<{ type: string }> = (props) => {
  const handleSelect = useSelectGame()
  const games: IGame[] = useSelector((state: RootStateOrAny) => state.games.results)
  const selectedGame: IGame[] = useSelector((state: RootStateOrAny) => state.games.selected)
  const selectedFilter: IGame[] = useSelector((state: RootStateOrAny) => state.games.selectedFilter)

  const buttonType = props.type === 'filter' ? selectedFilter : selectedGame

  console.log({ selectedFilter, selectedGame })

  return (
    <ContentWrapper>
      {games.map((game: IGame) => {
        return (
          <Button
            key={game.type}
            className={
              buttonType?.find((type) => type.type === game.type)
                ? BUTTON_THEME.GAMES_ACTIVE
                : BUTTON_THEME.GAMES
            }
            color={game.color}
            onPress={() => handleSelect(game, props.type)}
          >
            <ButtonText
              className={buttonType?.find((type) => type.type === game.type) ? 'active' : ''}
              color={game.color}
            >
              {game.type}
            </ButtonText>
          </Button>
        )
      })}
    </ContentWrapper>
  )
}

export default SelectGameCard
