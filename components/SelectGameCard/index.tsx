import React, { FC } from 'react'
import { RootStateOrAny, useSelector } from 'react-redux'

import { useSelectGame } from '../../hooks/useSelectGame'
import { IGame, ISaveGame } from '../../utils/'
import { BUTTON_THEME } from '../Button/styles'
import Button from '../Button'
import { ButtonText, ContentWrapper } from './styles'

const SelectGameCard: FC<{ type: string }> = (props) => {
  const handleSelect = useSelectGame()
  const games: IGame[] = useSelector((state: RootStateOrAny) => state.games.results)
  const selectedGame: IGame = useSelector((state: RootStateOrAny) => state.games.selectedGame)
  const selectedFilter: IGame[] = useSelector((state: RootStateOrAny) => state.games.selectedFilter)
  return (
    <ContentWrapper>
      {games.map((game: IGame) => {
        return (
          <Button
            key={game.type}
            className={
              props.type === 'filter'
                ? selectedFilter.find((type) => type.type === game.type)
                  ? BUTTON_THEME.GAMES_ACTIVE
                  : BUTTON_THEME.GAMES
                : selectedGame?.type === game.type
                ? BUTTON_THEME.GAMES_ACTIVE
                : BUTTON_THEME.GAMES
            }
            color={game.color}
            onPress={() => handleSelect(game, props.type)}
          >
            <ButtonText
              className={
                props.type === 'filter'
                  ? selectedFilter.find((type) => type.type === game.type)
                    ? 'active'
                    : ''
                  : selectedGame?.type === game.type
                  ? 'active'
                  : ''
              }
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
