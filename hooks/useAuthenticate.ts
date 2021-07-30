import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import Toast from 'react-native-toast-message'

import { setLoading, setUserLogged } from '../modules/login/actions'
import { getGames } from '../modules/games/actions'
import { baseUrl } from '../utils'
import { getSavedGames } from '../modules/cart/actions'

const useAuthenticate = () => {
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)
  const dispatch = useDispatch()

  const handleAuthentication = async (email: string, password: string, navigation: any) => {
    dispatch(setLoading(true))
    try {
      if (loginPage === 'register') {
        await axios.post(`${baseUrl}users`, { email, password })
      }
      const response = await axios.post(`${baseUrl}sessions`, {
        email,
        password,
      })
      await AsyncStorage.setItem('token', response.data.token)
      await AsyncStorage.setItem('user_id', `${response.data.user_id}`)
      if (response.data.token) {
        dispatch(setUserLogged(true))
        dispatch(getGames())
        dispatch(getSavedGames())
        navigation.push('Home')
        return
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(err)
      dispatch(setLoading(false))
      Toast.show({
        type: 'error',
        text1: 'Ops!',
        text2: `E-mail or password incorrect`,
      })
    }
  }

  return handleAuthentication
}

export default useAuthenticate
