import { IGame } from '../../utils/'
import {
  GET_GAMES_FULFILLED,
  GET_GAMES_PENDING,
  GET_GAMES_REJECT,
  SELECT_GAME,
  SELECT_FILTER,
  REMOVE_FILTER,
} from './actions'

interface IInitialState {
  results: IGame[]
  loading: boolean
  error: string | null
  selectedGame: IGame | null
  selectedFilters: IGame[]
}

const initialState = {
  results: [],
  loading: false,
  error: null,
  selectedGame: null,
  selectedFilters: [],
}

function games(state: IInitialState = initialState, action: any) {
  switch (action.type) {
    case GET_GAMES_FULFILLED:
      return {
        ...state,
        results: action.payload,
        loading: false,
        error: null,
        selectedGame: action.payload[0],
      }
    case GET_GAMES_PENDING:
      return {
        ...state,
        loading: true,
        error: null,
      }

    case GET_GAMES_REJECT:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }

    case SELECT_GAME:
      return {
        ...state,
        selectedGame: action.payload,
      }

    case SELECT_FILTER:
      return {
        ...state,
        selectedFilters: [...state.selectedFilters, action.payload],
      }
    case REMOVE_FILTER:
      const newFilter = state.selectedFilters?.filter((game) => game.type !== action.payload)
      return {
        ...state,
        selectedFilters: newFilter,
      }

    default:
      return state
  }
}

export default games
