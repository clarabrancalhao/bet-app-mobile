import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'

import { IProps } from './index'

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
export const StyledButton = styled(TouchableOpacity)<IProps>`
  &.games {
    border-radius: 100px;
    border: 2px solid ${({ color }) => color};
    color: ${({ color }) => color};
    font-size: 14px;
    padding: 9px 29px;
    background: #ffffff;
    margin-right: 22px;
  }

  &.games.active {
    background: ${({ color }) => color};
    color: #ffffff;
  }

  &.ghost {
    border: none;
    background: transparent;
    width: auto;
    align-items: center;
    justify-content: space-between;
  }

  &.save-cart {
    width: 100%;
    background: #f4f4f4;
    border: 1px solid #e2e2e2;
    color: #27c383;
    font-size: 35px;
    align-items: center;
    justify-content: space-around;
    padding: 27px;
  }

  &.add-to-cart {
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
  }

  &.green-border {
    border: 1px solid #27c383;
    border-radius: 10px;
    padding: 17px 22px;
    color: #27c383;
    font-size: 16px;
    width: auto;
  }

  &.number-cell {
    border-radius: 50%;
    background: #adc0c4;
    width: 63px;
    height: 63px;
    font-size: 20px;
    color: #ffffff;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 12px 12px 0;
  }

  &.number-cell.active {
    background: ${({ color }) => color};
  }
`
