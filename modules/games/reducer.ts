import { IGame } from '../../utils/'
import {
  GET_GAMES_FULFILLED,
  GET_GAMES_PENDING,
  GET_GAMES_REJECT,
  SELECT_GAME,
  SELECT_FILTER,
} from './actions'

interface IInitialState {
  results: IGame[]
  loading: boolean
  error: string | null
  selected: IGame | null
  selectedFilter: IGame | null
}

const initialState = {
  results: [],
  loading: false,
  error: null,
  selected: null,
  selectedFilter: null,
}

function games(state: IInitialState = initialState, action: any) {
  switch (action.type) {
    case GET_GAMES_FULFILLED:
      return {
        results: action.payload,
        loading: false,
        error: null,
        selected: action.payload[0],
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
        selected: action.payload,
      }

    case SELECT_FILTER:
      return {
        ...state,
        selectedFilter: action.payload,
      }

    default:
      return state
  }
}

export default games
