export const colors = {
  TGL: '#B5C401',
  MEGA_SENA: '#01AC66',
  LOTOFACIL: '#7F3992',
  LOTOMANIA: '#F79C31',
  TEXT: '#868686',
  TITLE: '#707070',
  BACKGROUND: '#F7F7F7',
  NUMBERS: '#ADC0C4',
}

export interface IGame {
  id: string
  color: string
  type: string
  range: number
  date: number
  price: number
  description?: string
  'max-number': number
  'min-cart-value': number
  selectedNumbers: number[]
  game_id: number
}

export interface ISaveGame {
  game_id: number
  numbers: number[]
}

export interface ILogin {
  isLogged: boolean
  emailError: boolean
  passwordError: boolean
}

export const LOGIN_PAGE_LINKS: any = {
  login: 'Log in',
  forgetPassword: 'Send link',
  register: 'Register',
}

export const formatCurrency = function (amount: string) {
  return 'R$' + parseFloat(amount).toFixed(2).replace(/\./, ',')
}

export const baseUrl = 'http://localhost:8000/'
