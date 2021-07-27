import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { KeyboardAvoidingView, Platform, SafeAreaView, View } from 'react-native'
import { Provider } from 'react-redux'
import Toast from 'react-native-toast-message'

import { store } from './store'
import Router from './router'

export default function App() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS == 'ios' ? 20 : 20}
        enabled={true}
      >
        <SafeAreaView style={{ flex: 1 }}>
          <Router />
          <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </Provider>
  )
}
