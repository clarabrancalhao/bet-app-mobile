import React, { FC } from 'react'
import {
  AddToCartButton,
  GamesButton,
  GhostButton,
  GreenBorderButton,
  NumberCell,
  SaveCartButton,
  SmallCell,
} from './styles'

export interface IProps {
  onPress: any
  className: string
  color?: string
  id?: string
  value?: number
}

const Button: FC<IProps> = ({ onPress, className, id, value, color, children }) => {
  if (className === 'ghost') {
    return <GhostButton onPress={onPress}>{children}</GhostButton>
  }
  if (className === 'number-cell' || className === 'number-cell active') {
    return (
      <NumberCell onPress={onPress} color={color} className={className}>
        {children}
      </NumberCell>
    )
  }
  if (className === 'green-border') {
    return <GreenBorderButton onPress={onPress}>{children}</GreenBorderButton>
  }
  if (className === 'save-cart') {
    return <SaveCartButton onPress={onPress}>{children}</SaveCartButton>
  }
  if (className === 'add-to-cart') {
    return <AddToCartButton onPress={onPress}>{children}</AddToCartButton>
  }
  if (className === 'small_cell') {
    return (
      <SmallCell color={color} className={className} onPress={onPress}>
        {children}
      </SmallCell>
    )
  } else {
    return (
      <GamesButton color={color} className={className} id={id} onPress={onPress}>
        {children}
      </GamesButton>
    )
  }
}

export default Button
