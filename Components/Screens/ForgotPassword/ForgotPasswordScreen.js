import React from 'react'
import { View, Text, StatusBar,Dimensions,StyleSheet, TouchableOpacity,TextInput} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Icons from 'react-native-vector-icons/Fontisto';
import { Icon } from 'react-native-elements';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

import { useFonts } from 'expo-font';
import NSLight from '../../Fonts/NunitoSans/NunitoSansLight.ttf';
import NSRegular from '../../Fonts/NunitoSans/NunitoSansRegular.ttf';
import NSBold from '../../Fonts/NunitoSans/NunitoSansBold.ttf';
import NSExtraBold from '../../Fonts/NunitoSans/NunitoSansExtraBold.ttf';

const ForgotPasswordScreen = ({navigation}) => {

    // loaded
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <SafeAreaProvider>

        <StatusBar
            animated={true}
            backgroundColor='#FC7900'
        />

        <View style={styles.container}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <View style={styles.iconCon}>
                    <Icons name='arrow-left-l' size={25} color='white'/>
                </View>
            </TouchableOpacity>

            <View style={styles.contentCon}>

                <Text style={styles.header}>Reset Password</Text>
                <Text style={styles.subHeads}>enter your registered account email for password recovery.</Text>

                <View style={{width: width*0.97, justifyContent: 'center'}}>

                    <View style={styles.inputView}>
                       
                       <Icon
                            style={{ paddingHorizontal: 4 }}
                            name='envelope'
                            type='font-awesome'
                            color='#fff'
                            size={22}
                        />

                        <TextInput
                            style={styles.input}
                            placeholder='Email'
                            placeholderTextColor='#f1f2f6'
                            keyboardType='email-address'
                            textContentType='emailAddress'
                            autoCompleteType='email'
                            returnKeyType='next'
                        />
                    </View>

                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>SUBMIT</Text>
                    </TouchableOpacity>

                </View>

            </View>
            
        </View>


    </SafeAreaProvider>
  )
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FC7900',
        height: height
    },
    iconCon:{
        marginVertical: 15,
        marginHorizontal: 15,
    },
    contentCon:{
        marginHorizontal:15,
        marginVertical:30,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    header:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        color: 'white'
    },
    subHeads:{
        fontSize: 14,
        fontWeight: '100',
        textAlign: 'left',
        color:'rgba(255,255,255,0.80)'
    },
    inputView:{
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        marginTop: 30,
        marginHorizontal: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        fontSize: 16,
        fontFamily: 'NSLight',
        paddingHorizontal: 4,
        color: '#fff',
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
      },
      buttonText: {
        fontFamily: 'NSBold',
        fontSize: 16, 
        color: '#E44D26',
        textTransform:'uppercase'
        },
      
})