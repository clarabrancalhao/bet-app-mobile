import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'

import { store } from './store'
import Router from './router'

export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 0 : 20}
        enabled={Platform.OS === 'ios' ? true : false}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Provider>
  )
}
