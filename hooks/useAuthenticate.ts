import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import { setLoading, setUserLogged } from '../modules/login/actions'
import { getGames } from '../modules/games/actions'

const useAuthenticate = () => {
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)
  const dispatch = useDispatch()

  const handleAuthentication = async (email: string, password: string, navigation: any) => {
    try {
      if (loginPage === 'register') {
        await axios.post('https://application-mock-server.loca.lt/users', { email, password })
      }
      const response = await axios.post('https://application-mock-server.loca.lt/sessions', {
        email,
        password,
      })
      await AsyncStorage.setItem('token', response.data.token)
      await AsyncStorage.setItem('user_id', `${response.data.user_id}`)
      dispatch(setUserLogged(true))
      if (response.data.token) {
        dispatch(setLoading(true))
        dispatch(getGames())
        dispatch(setLoading(false))
        navigation.push('Home')
      } else {
        throw new Error()
      }
    } catch (err) {
      console.log(err)
    }
    //notify('Email or password incorrect.')
  }

  return handleAuthentication
}

export default useAuthenticate
