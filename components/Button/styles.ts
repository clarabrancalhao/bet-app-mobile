import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import Button, { IProps } from './index'

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
  color: #27c383;
  font-size: 35px;
  align-items: center;
  justify-content: space-around;
  padding: 27px;
`

export const AddToCartButton = styled(TouchableOpacity)`
  background: #27c383;
  border: none;
  border-radius: 10px;
  color: #ffffff;
  font-size: 16px;
  padding: 17px 22px;
  white-space: pre;
  width: auto;
  justify-content: space-around;
  align-items: center;
`

export const GreenBorderButton = styled(TouchableOpacity)`
  border: 1px solid #27c383;
  border-radius: 10px;
  padding: 17px 22px;
  color: #27c383;
  font-size: 16px;
  width: auto;
`

export const NumberCell = styled(TouchableOpacity)<IProps>`
  border-radius: 50%;
  background: ${({ className, color }) => (className === 'number-cell' ? '#adc0c4' : color)};
  width: 63px;
  height: 63px;
  font-size: 20px;
  color: #ffffff;
  justify-content: center;
  align-items: center;
  border: none;
  margin: 0 12px 12px 0;
`

export const GhostButton = styled(TouchableOpacity)`
  border: none;
  background: transparent;
  width: auto;
  align-items: center;
  justify-content: space-between;
`
