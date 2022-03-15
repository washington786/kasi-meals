import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator,TransitionPresets} from '@react-navigation/native-stack';

import WalkthroughScreen from '../WalkthroughScreen/WalkthroughScreen';
import LoginRegisterScreen from '../LoginScreen/LoginRegisterScreen';
import ForgotPasswordScreen from '../ForgotPassword/ForgotPasswordScreen';
import HomeScreen from '../HomeScreen/HomeScreen';
import NewWelcomeScreen from '../WalkthroughScreen/NewWelcomeScreen';

const stack = createNativeStackNavigator();

export default function NavigationStackScreen(){
    return(
        <stack.Navigator>

        <stack.Screen name="welcome" component={NewWelcomeScreen} options={{
            headerShown:false}}/>

        <stack.Screen name="walkthrough" component={WalkthroughScreen} options={{
            headerShown:false}}/>

        <stack.Screen name="loginRegister" component={LoginRegisterScreen} options={{
            headerShown:false}}/>

        <stack.Screen name="resetPassword" component={ForgotPasswordScreen} options={{
            headerShown:false}}/>
            
        <stack.Screen name="homeScreen" component={HomeScreen} options={{
            headerShown:false}}/>

    </stack.Navigator>
    )

}

const styles = StyleSheet.create({})