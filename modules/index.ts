import { combineReducers } from 'redux'

import cart from './cart/reducer'
import games from './games/reducer'
import login from './login/reducer'

export const rootReducer = combineReducers({ cart, games, login })
