import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
//import { useHistory } from 'react-router'
import { setUserLogged } from '../modules/login/actions'
import axios from 'axios'

const useAuthenticate = () => {
  const loginPage: string = useSelector((state: RootStateOrAny) => state.login.loginPage)
  const dispatch = useDispatch()
  //const history = useHistory()

  const handleAuthentication = (emailValue: string, passwordValue: string) => {
    const body = { email: emailValue, password: passwordValue }
    const url = 'http://localhost:3333/sessions'

    if (loginPage === 'register') {
      axios.post('http://localhost:3333/users', body)
    }
    axios.post(url, body).then((response) => {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user_id', response.data.user_id)
      dispatch(setUserLogged(true))
      //history.push('/')
    })
    // .catch(err) {}
    //notify('Email or password incorrect.')
  }

  return handleAuthentication
}

export default useAuthenticate
