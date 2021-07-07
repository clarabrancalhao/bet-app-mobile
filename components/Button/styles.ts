import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
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
export const StyledButton = styled(TouchableOpacity)`
  &.games {
    border-radius: 10rem;
    border: 2px solid ${({ color }) => color};
    color: ${({ color }) => color};
    font-size: 1.4rem;
    width: fit-content;
    padding: 0.9rem 2.9rem;
    width: fit-content;
    background: #ffffff;
    margin-right: 2.2rem;

    @media (max-width: 500px) {
      margin-bottom: 1.2rem;
    }
  }

  &.games.active {
    background: ${({ color }) => color};
    color: #ffffff;
  }

  &.ghost {
    border: none;
    background: transparent;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &.save-cart {
    width: 100%;
    background: #f4f4f4;
    border: 1px solid #e2e2e2;
    color: #27c383;
    font-size: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 2.7rem;
  }

  &.add-to-cart {
    background: #27c383;
    border: none;
    border-radius: 1rem;
    color: #ffffff;
    font-size: 1.6rem;
    padding: 1.7rem 2.2rem;
    white-space: pre;
    width: auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &.green-border {
    border: 1px solid #27c383;
    border-radius: 1rem;
    padding: 1.7rem 2.2rem;
    color: #27c383;
    font-size: 1.6rem;
    white-space: pre;
    width: auto;
  }

  &.number-cell {
    border-radius: 50%;
    background: #adc0c4;
    width: 6.3rem;
    height: 6.3rem;
    font-size: 2rem;
    color: #ffffff;
    font-style: normal;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    margin: 0 1.2rem 1.2rem 0;
  }

  &.number-cell.active {
    background: ${({ color }) => color};
  }
`
