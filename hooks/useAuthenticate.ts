import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

import { setUserLogged } from '../modules/login/actions'

const useAuthenticate = () => {
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)
  const dispatch = useDispatch()

  const handleAuthentication = async (email: string, password: string, navigation: any) => {
    try {
      if (loginPage === 'register') {
        await axios.post('http://192.168.0.34:3333/users', { email, password })
      }
      const response = await axios.post('http://192.168.0.34:3333/sessions', { email, password })
      const data = await response.data
      await AsyncStorage.setItem('token', response.data.token)
      await AsyncStorage.setItem('user_id', response.data.user_id)
      dispatch(setUserLogged(true))
      navigation.push('Home')
    } catch (err) {
      console.log(err)
    }
    //notify('Email or password incorrect.')
  }

  return handleAuthentication
}

export default useAuthenticate
