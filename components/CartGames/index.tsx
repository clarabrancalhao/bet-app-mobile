import React from 'react'
import { EvilIcons } from '@expo/vector-icons'

import {
  CardWrapper,
  GameContentWrapper,
  GameTitle,
  Marker,
  Numbers,
  PriceDateText,
  TrashWrapper,
} from './styles'
import { colors } from '../../utils'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'

export interface IProps {
  color: string
  type?: string
  numbers?: number[]
  price?: number
  date?: string
}

export default function CartGames({ color, type, numbers, date, price }: IProps) {
  return (
    <CardWrapper>
      <Marker color={color} />
      <GameContentWrapper>
        <Numbers>{numbers?.join(', ')}</Numbers>
        <TrashWrapper>
          <PriceDateText>
            {date} - ({price})
          </PriceDateText>
          <Button className={BUTTON_THEME.GHOST} onPress={() => {}}>
            <EvilIcons name="trash" size={18} color={colors.TITLE} />
          </Button>
        </TrashWrapper>
        <GameTitle color={color}>{type}</GameTitle>
      </GameContentWrapper>
    </CardWrapper>
  )
}
