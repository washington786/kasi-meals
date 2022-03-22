import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from '../BottomTabScreens/SearchScreen';
import SearchResultsScreen from '../SearchResults/SearchResultsScreen';

const searchStack = createNativeStackNavigator();

export function SearchStackTabs(){
  return (
    <searchStack.Navigator>
        
        <searchStack.Screen
            name='searchScreen'
            component={SearchScreen}
            options={
                {
                    headerShown:false
                }
            }
        />

        <searchStack.Screen
            name='searchResults'
            component={SearchResultsScreen}
            options={
                {
                    headerShown:false
                }
            }
        />

        
    </searchStack.Navigator>
  )
}
