import React, { useRef } from 'react'
import { View, Text, Button } from 'react-native'

import Numbers from '../../components/Numbers'
import Header from '../../components/Header'
import { Wrapper } from './styles'
import { DrawerLayoutAndroid } from 'react-native-gesture-handler'

export default function index() {
  const drawer: any = useRef()
  const navigationView = () => (
    <View>
      <Text>I'm in the Drawer!</Text>
      <Button title="Close drawer" onPress={() => drawer.current.closeDrawer()} />
    </View>
  )

  return (
    <DrawerLayoutAndroid
      renderNavigationView={navigationView}
      ref={drawer}
      drawerWidth={265}
      drawerPosition={'right'}
    >
      <Wrapper>
        <Header />
        <Numbers />
      </Wrapper>
    </DrawerLayoutAndroid>
  )
}
