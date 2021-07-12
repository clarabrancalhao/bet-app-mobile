import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { Provider, RootStateOrAny, useDispatch, useSelector } from 'react-redux'

import { store } from './store'
import Router from './router'
import { setLoading, setUserLogged } from './modules/login/actions'
import { getGames } from './modules/games/actions'

export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <Router />
      </KeyboardAvoidingView>
    </Provider>
  )
}
