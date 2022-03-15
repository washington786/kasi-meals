import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image,StatusBar} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
// import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


const slides = [
    {
      key: 1,
      title: 'Search Meal',
      text: 'Search for your favorite meal.',
      image: require('../../Images/Search.png'),
    //   backgroundColor: '#59b2ab',
    },
    {
      key: 2,
      title: 'Place Order',
      text: 'Place order for your favorite meal.',
      image: require('../../Images/OrderPlaced.png'),
    //   backgroundColor: '#febe29',
    },
    {
      key: 3,
      title: 'Delivery On Time',
      text: 'Get the order of your favorite on time.',
      image: require('../../Images/DeliveryOnTime.png'),
    //   backgroundColor: '#22bcb5',
    },
    {
        key: 4,
        title: 'Delivery At Door',
        text: 'Get the order delivered at your location.',
        image: require('../../Images/DeliveryAtDoor.png'),
        // backgroundColor: '#22bcb5',
      }
  ];

const completedOnboarding = async()=>{
    await AsyncStorage.setItem('hasOnboarded',JSON.stringify({
        hasOnboarded:true
    }));

    this.props.navigation.navigate('loginRegister')
}

export default class WalkthroughScreen extends React.Component {
    // const navigation = useNavigation();

    state = {showHomePage: false}

    _renderItem = ({ item }) => {
        return (
            <View style={{flex:1, backgroundColor:'#eee'}}>
                <Image source={item.image} 
                    style={
                        {
                            resizeMode:'contain',
                            height: height*0.7,
                            width: width*0.9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            alignSelf: 'center',
                        }
                    }
                />
                <View style={styles.content}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.description}>{item.text}</Text>
                </View>
                
            </View>
        );
    }

    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
            <Icon
                name="arrow-forward"
                color="rgba(255, 255, 255, .9)"
                size={24}
            />
            </View>
        );
    };

    _renderDoneButton = () => {
    return (
            <View style={styles.buttonCircle}>
                <Icon
                    name="md-checkmark"
                    color="rgba(255, 255, 255, .9)"
                    size={24}
                />
                </View>
        
    );
    };

 render(){
    return (
        <SafeAreaProvider>
            <StatusBar
        animated={true}
        backgroundColor="rgba(252,121,0,0.60)"
        />
            <AppIntroSlider
            data={slides}
            renderItem={this._renderItem}
            renderDoneButton={this._renderDoneButton}
            renderNextButton={this._renderNextButton}
            onDone={()=>{this.props.navigation.navigate('loginRegister')}}
            />
        </SafeAreaProvider>
      );
 }
}

const styles = StyleSheet.create({
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: '#FC7900',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content:{
        paddingHorizontal: 15,
        paddingVertical:15,
        backgroundColor: 'rgba(252,121,0,0.60)',
        height: height,
        borderTopRightRadius:20,
        borderTopLeftRadius:20,
    },
    title:{
        color:'white',
        fontSize:30,
        fontWeight:'bold',
        paddingBottom: 5
    },
    description:{
        color:'rgba(255,255,255,0.50)',
        fontSize: 14,
        fontWeight:'600',
        width:'70%'
    }
})