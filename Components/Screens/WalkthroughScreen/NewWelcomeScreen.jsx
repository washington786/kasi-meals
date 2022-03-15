import { View, Text,Dimensions, ImageBackground,StatusBar,StyleSheet,TouchableOpacity} from 'react-native'
import React,{useEffect} from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import bg from '../../Images/bg.png'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const NewWelcomeScreen = ({navigation}) => {
    
    // for status bar
    useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
    }, []);

  return (
    <SafeAreaProvider>
        <View>
            <ImageBackground source={bg} style={{height:height, width:width, justifyContent:'center', position:'relative'}} resizeMode='cover'>
                <View style={{position:'absolute', alignItems: 'flex-start', justifyContent:'flex-start',width:width*0.9, height: height*0.4, marginHorizontal:20, bottom:30}}>

                    <Text style={styles.title}>Welcome to {"\n"}kasi meal App</Text>
                    <Text style={styles.sub}>We will help you find the most of your favorite kasi meals.</Text>

                    <View style={{position: 'relative', height:'45%',width:'100%',flexDirection:'row', justifyContent:'center'}}>

                        <View style={{position:'absolute', bottom:3, flexDirection:'row',justifyContent:'space-evenly'}}>
                            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('loginRegister')}>
                                <Text style={styles.buttonText}>Sign In</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.button2} onPress={() =>navigation.navigate('loginRegister')}>
                                <Text style={styles.buttonText2}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    </SafeAreaProvider>
  )
}

export default NewWelcomeScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        textTransform:'capitalize',
        letterSpacing:4
    },
    sub:{
        color:'#fff',
        paddingVertical:5
    },
    button: {
        marginHorizontal: 10,
        backgroundColor: '#fafafa',
        marginTop: 30,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        width: 150
      },
      buttonText: {
        // fontFamily: '',
        fontSize: 16, 
        color: '#E44D26',
        textTransform:'uppercase'
        },
        button2: {
            marginHorizontal: 10,
            backgroundColor: '#E44D26',
            marginTop: 30,
            paddingVertical: 10,
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            width:150
          },
          buttonText2: {
            //    fontFamily: 'NSBold',
            fontSize: 16, 
            color: '#fff',
            textTransform:'uppercase'
            },
})