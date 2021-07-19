import React from 'react'
import { EvilIcons } from '@expo/vector-icons'
import moment from 'moment'

import {
  CardWrapper,
  GameContentWrapper,
  GameTitle,
  Marker,
  Numbers,
  PriceDateText,
  TrashWrapper,
} from './styles'
import { colors, formatCurrency } from '../../utils'
import Button from '../Button'
import { BUTTON_THEME } from '../Button/styles'

export interface IProps {
  color: string
  type?: string
  numbers?: number[]
  price?: number
  date?: number
}

export default function CartGames({ color, type, numbers, date, price }: IProps) {
  const stringNumbersArray = numbers?.map((number) => {
    const string = number < 10 ? `0${number}` : `${number}`
    return string
  })

  return (
    <CardWrapper>
      <Marker color={color} />
      <GameContentWrapper>
        <Numbers>{stringNumbersArray?.join(', ')}</Numbers>
        <TrashWrapper>
          <PriceDateText>
            {moment(new Date(date)).format('DD/MM/yyyy')} - ( {formatCurrency(`${price}`)} )
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
