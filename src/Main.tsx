import React from 'react'
import { Text, View } from 'react-native'
import { BottomTabNavigator } from './presentation/screens/navigators/BottomTabNavigator'
import { NavigationContainer } from '@react-navigation/native'

export const Main = () => {
  return (
    <NavigationContainer>
        <BottomTabNavigator />
    </NavigationContainer>
  )
}
