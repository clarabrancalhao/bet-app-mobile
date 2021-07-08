import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'
import Header from './components/Header'
import Numbers from './components/Numbers'
import Login from './screens/Login'
import Router from './router'

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  )
}
