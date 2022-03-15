import { View, Text } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStackScreen from './NavigationStacksScreen';

export default function MainNavigatorScreen() {
  return (
    <NavigationContainer>
        <NavigationStackScreen/> 
    </NavigationContainer>
  )
}