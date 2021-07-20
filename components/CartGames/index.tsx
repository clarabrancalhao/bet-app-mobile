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
import { removeFromCart } from '../../modules/cart/actions'
import { useDispatch } from 'react-redux'

export interface IProps {
  color?: string
  type?: string
  numbers?: number[]
  price: number
  date?: number
  id: string
}

export default function CartGames({ color, type, numbers, date, price, id }: IProps) {
  const dispatch = useDispatch()

  const stringNumbersArray = numbers?.map((number) => {
    const string = number < 10 ? `0${number}` : `${number}`
    return string
  })

  const handleRemoveItem = () => {
    dispatch(removeFromCart(id, price))
  }

  return (
    <CardWrapper>
      <Marker color={color} />
      <GameContentWrapper>
        <Numbers>{stringNumbersArray?.join(', ')}</Numbers>
        <TrashWrapper>
          <PriceDateText>
            {moment(new Date(date)).format('DD/MM/yyyy')} - ( {formatCurrency(`${price}`)} )
          </PriceDateText>
          <Button className={BUTTON_THEME.GHOST} onPress={handleRemoveItem}>
            <EvilIcons name="trash" size={18} color={colors.TITLE} />
          </Button>
        </TrashWrapper>
        <GameTitle color={color}>{type}</GameTitle>
      </GameContentWrapper>
    </CardWrapper>
  )
}
