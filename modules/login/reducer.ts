import {
  SET_EMAIL_ERROR,
  SET_FORGET_PASSWORD_PAGE,
  SET_LOGIN_PAGE,
  SET_PASSWORD_ERROR,
  SET_SECOND_PASSWORD_ERROR,
  SET_REGISTER_PAGE,
  SET_USER_LOGGED,
  SET_LOADING,
} from './actions'

interface IState {
  isLogged: boolean
  emailError: boolean
  passwordError: boolean
  loginPage: string
  isLoading: boolean | null
}

interface IAction {
  type: string
  payload: boolean
}

const initialState = {
  isLogged: false,
  emailError: false,
  passwordError: false,
  loginPage: 'login',
  isLoading: true,
}

function login(state: IState = initialState, action: IAction) {
  switch (action.type) {
    case SET_EMAIL_ERROR:
      return {
        ...state,
        emailError: action.payload,
      }
    case SET_PASSWORD_ERROR:
      return {
        ...state,
        passwordError: action.payload,
      }

    case SET_USER_LOGGED:
      return {
        ...state,
        isLogged: action.payload,
      }

    case SET_FORGET_PASSWORD_PAGE:
      return {
        ...state,
        loginPage: 'forgetPassword',
        passwordError: false,
      }
    case SET_LOGIN_PAGE:
      return {
        ...state,
        loginPage: 'login',
      }

    case SET_REGISTER_PAGE:
      return {
        ...state,
        loginPage: 'register',
      }

    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      }

    case SET_SECOND_PASSWORD_ERROR:
      return {
        ...state,
        secondPasswordError: action.payload,
      }

    default:
      return state
  }
}

export default login
