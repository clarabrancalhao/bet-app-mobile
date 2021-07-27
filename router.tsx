import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { Image, ActivityIndicator, View } from 'react-native'

import Home from './screens/Home'
import Login from './screens/Login'
import NewBet from './screens/NewBet'
import Account from './screens/Account'
import { colors } from './utils'
import { RootStateOrAny, useSelector } from 'react-redux'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

function TabScreen() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.TITLE,
        inactiveTintColor: '#C1C1C1',
        labelStyle: {
          fontSize: 15,
          fontWeight: 'bold',
          fontStyle: 'italic',
        },
        style: {
          height: 72,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            let newColor
            color === colors.TITLE ? (newColor = colors.TGL) : (newColor = color)
            return <Ionicons name="home-outline" size={24} color={newColor} />
          },
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        name="NewBet"
        component={NewBet}
        options={{
          tabBarLabel: '',
          tabBarIcon: () => (
            <Image style={{ width: 92, height: 92 }} source={require('./assets/tgl.png')} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color }) => {
            let newColor
            color === colors.TITLE ? (newColor = colors.TGL) : (newColor = color)
            return <FontAwesome name="user-o" size={24} color={newColor} />
          },
        }}
        name="Account"
        component={Account}
      />
    </Tab.Navigator>
  )
}

export default function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={TabScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
