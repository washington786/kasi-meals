import React from 'react'
// icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// screens
import HomeScreen from '../HomeScreen/HomeScreen';
import SearchScreen from '../BottomTabScreens/SearchScreen';
import OrderScreen from '../BottomTabScreens/OrdersScreen';
import AccountScreen from '../BottomTabScreens/AccountScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#ff0000',
            headerShown:false,
            tabBarStyle:{
              position: 'absolute',
              bottom: 5,
              marginHorizontal:20,
              paddingVertical:10,
              paddingHorizontal:10,
              marginVertical:10,
              borderRadius:20,
            },
            "tabBarActiveTintColor":'#ff0000',
        }}
        >
        <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarIcon:({color})=>(
                <Icon name='view-dashboard' size={30} color={color}/>
            ),
            tabBarLabel:'Home',
            headerShown:false,
            tabBarActiveTintColor:'#ff0000',
            tabBarInactiveTintColor:'grey'
        }}/>

        <Tab.Screen name="Search" component={SearchScreen} options={{
            tabBarIcon:({color})=>(
                <Octicons name='search' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'Search',
            headerShown:false,
        }}/>

        <Tab.Screen name="Orders" component={OrderScreen} options={{
            tabBarIcon:({color})=>(
                <Icon name='food' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'Orders',
            headerShown:false,
        }}/>

        <Tab.Screen name="Account" component={AccountScreen} options={{
            tabBarIcon:({color})=>(
                <Icon name='account' size={30} color={color} style={{paddingVertical:0}}/>
            ),
            tabBarLabel:'Account',
            headerShown:false,
        }}/>

    </Tab.Navigator>

  )
}

export default BottomTabs