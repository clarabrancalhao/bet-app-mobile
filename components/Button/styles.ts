import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import Button, { IProps } from './index'
import { colors } from '../../utils'

export const BUTTON_THEME = {
  GAMES: 'games',
  GAMES_ACTIVE: 'games active',
  SAVE_CART: 'save-cart',
  GHOST: 'ghost',
  ADD_TO_CART: 'add-to-cart',
  GREEN_BORDER: 'green-border',
  NUMBER_CELL: 'number-cell',
  NUMBER_CELL_ACTIVE: 'number-cell active',
}

export const GamesButton = styled(TouchableOpacity)<IProps>`
  border-radius: 100px;
  border-color: ${({ color }) => color};
  border-width: 2px;
  padding: 5px 21px;
  background-color: ${({ color, className }) => (className === 'games' ? '#ffffff' : color)};
`

export const SaveCartButton = styled(TouchableOpacity)`
  width: 100%;
  background: #f4f4f4;
  border: 1px solid #e2e2e2;
  color: ${colors.TGL};
  font-size: 35px;
  align-items: center;
  justify-content: space-around;
  padding: 27px;
`

export const AddToCartButton = styled(TouchableOpacity)`
  background: ${colors.TGL};
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  padding: 8px 6px;
  width: auto;
  justify-content: space-around;
  align-items: center;
  margin: 4px;
`

export const GreenBorderButton = styled(TouchableOpacity)`
  border: 1px solid ${colors.TGL};
  border-radius: 10px;
  padding: 8px 6px;
  color: ${colors.TGL};
  font-size: 16px;
  margin: 4px;
`

export const NumberCell = styled(TouchableOpacity)<IProps>`
  border-radius: 100px;
  background: ${({ className, color }) => (className === 'number-cell' ? '#adc0c4' : color)};
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  justify-content: center;
  align-items: center;
  margin: ${({ size }) => (size === 40 ? '2px' : '5px')};
`

export const GhostButton = styled(TouchableOpacity)`
  border: none;
  background: transparent;
  width: auto;
  align-items: center;
  justify-content: space-between;
`
