import React, { FC } from 'react'
import {
  AddToCartButton,
  GamesButton,
  GhostButton,
  GreenBorderButton,
  NumberCell,
  SaveCartButton,
} from './styles'

export interface IProps {
  onPress: any
  className: string
  color?: string
  id?: string
  value?: number
  size?: number
}

const Button: FC<IProps> = ({ onPress, className, id, value, color, children, size }) => {
  if (className === 'ghost') {
    return <GhostButton onPress={onPress}>{children}</GhostButton>
  }
  if (className === 'number-cell' || className === 'number-cell active') {
    return (
      <NumberCell size={size} onPress={onPress} color={color} className={className}>
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
  } else {
    return (
      <GamesButton color={color} className={className} id={id} onPress={onPress}>
        {children}
      </GamesButton>
    )
  }
}

export default Button
