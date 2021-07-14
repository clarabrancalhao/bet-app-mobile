import axios from 'axios'
import { baseUrl } from '../../utils'

export const SET_EMAIL_ERROR = 'SET_EMAIL_ERROR'
export const SET_PASSWORD_ERROR = 'SET_PASSWORD_ERROR'
export const SET_USER_LOGGED = 'SET_USER_LOGGED'
export const SET_LOGIN_PAGE = 'SET_LOGIN_PAGE'
export const SET_REGISTER_PAGE = 'SET_REGISTER_PAGE'
export const SET_FORGET_PASSWORD_PAGE = 'SET_PASSWORD_PAGE'
export const CHANGE_PASSWORD_PENDING = 'CHANGE_PASSWORD_PENDING'
export const SET_SECOND_PASSWORD_ERROR = 'SET_SECOND_PASSWORD_ERROR'
export const SET_LOADING = 'SET_LOADING'

interface IChangePassword {
  password: string
  confirmedPassword: string
  token: string
}

//ADICIONAR NOTIFICAÇOES

export const sendEmailPassword = (email: string) => {
  return (dispatch: any) => {
    dispatch(changePasswordPending())
    axios
      .post(`${baseUrl}passwords`, {
        email: email,
        redirect_url: `${baseUrl}reset-password`,
      })
      .then(() => {
        {
        }
      })
      .catch((err) => {})
  }
}

export const changePassword = ({ password, confirmedPassword, token }: IChangePassword) => {
  return (dispatch: any) => {
    dispatch(changePasswordPending())
    axios
      .put(`${baseUrl}passwords`, {
        password,
        password_confirmation: confirmedPassword,
        token,
      })
      .then(() => {
        {
        }
      })
      .catch((err) => {})
  }
}

export const setEmailError = (hasError: boolean) => ({
  type: SET_EMAIL_ERROR,
  payload: hasError,
})

export const setPasswordError = (hasError: boolean) => ({
  type: SET_PASSWORD_ERROR,
  payload: hasError,
})

export const setSecondPasswordError = (hasError: boolean) => ({
  type: SET_SECOND_PASSWORD_ERROR,
  payload: hasError,
})

export const setUserLogged = (isLogged: boolean) => ({
  type: SET_USER_LOGGED,
  payload: isLogged,
})

export const setRegister = () => ({
  type: SET_REGISTER_PAGE,
})

export const setForgetPassword = () => ({
  type: SET_FORGET_PASSWORD_PAGE,
})

export const setLogIn = () => ({
  type: SET_LOGIN_PAGE,
})

export const setLoading = (value: boolean) => ({
  type: SET_LOADING,
  payload: value,
})

const changePasswordPending = () => ({
  type: CHANGE_PASSWORD_PENDING,
})
