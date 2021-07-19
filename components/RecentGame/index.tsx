import React from 'react'
import { format } from 'date-fns'
import moment from 'moment'

import {
  CardWrapper,
  GameContentWrapper,
  GameTitle,
  Marker,
  Numbers,
  PriceDateText,
} from './styles'
import { formatCurrency } from '../../utils'

export interface IProps {
  color: string
  type?: string
  numbers?: number[]
  price?: number
  date?: number
}

export default function RecentGame({ color, type, numbers, date, price }: IProps) {
  const stringNumbersArray = numbers?.map((number) => {
    const string = number < 10 ? `0${number}` : `${number}`
    return string
  })

  const newDate = moment(date)
  const formattedDate = newDate.format('DD/MM/YYYY')

  return (
    <CardWrapper>
      <Marker color={color} />
      <GameContentWrapper>
        <Numbers>{stringNumbersArray?.join(', ')}</Numbers>
        <PriceDateText>
          {formattedDate} - ( {formatCurrency(`${price}`)} )
        </PriceDateText>
        <GameTitle color={color}>{type}</GameTitle>
      </GameContentWrapper>
    </CardWrapper>
  )
}
