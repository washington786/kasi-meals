import React,{ useState, useEffect } from 'react';

import {SafeAreaView } from 'react-native-safe-area-context';

import {StyleSheet,Text,View,StatusBar,TextInput,TouchableOpacity,Dimensions} from 'react-native';

import { Icon } from 'react-native-elements';

import { useFonts } from 'expo-font';
import NSLight from '../../Fonts/NunitoSans/NunitoSansLight.ttf';
import NSRegular from '../../Fonts/NunitoSans/NunitoSansRegular.ttf';
import NSBold from '../../Fonts/NunitoSans/NunitoSansBold.ttf';
import NSExtraBold from '../../Fonts/NunitoSans/NunitoSansExtraBold.ttf';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const LoginRegisterScreen=({navigation})=>{

  // loaded
  const [loaded] = useFonts({
    NSLight,
    NSRegular,
    NSBold,
    NSExtraBold,
  });

  const [activeTab, setActiveTab] = useState('Login');

  useEffect(function () {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  // switch
  function switchTab() {
    if (activeTab === 'Login') {
      setActiveTab('Register');
    } else {
      setActiveTab('Login');
    }
  }

  // login
  const Login=()=>{
    const [showLoginPassword, setShowLoginPassword] = useState(false);
    return(
      <>
        <StatusBar
        animated={true}
        backgroundColor="#FC7900"
        />

        <View style={{ marginTop: 10 }}>
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
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4 }}
            name='lock'
            type='Entypo'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showLoginPassword}
            textContentType='password'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowLoginPassword(!showLoginPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('homeScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>navigation.navigate('resetPassword')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.socialLoginView}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width:width*0.7}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'white', marginHorizontal:10}} />
                <Text style={{color:'white'}}>Or Sign In With</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'white',marginHorizontal:10}} />
              </View>
                <View style={{flex: 1, flexDirection:'row', paddingVertical:15}}>
                <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='google' type='font-awesome' color='#F16529' />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialLoginTouchable}>
                <Icon name='facebook' type='font-awesome' color='#F16529' />
              </TouchableOpacity>
              </View>
          </View>
        </View>
      </View>
      </>
    )
  }

  // register
  const Register=()=>{
    const [showRegisterPassword, setShowRegisterPassword] = useState(false);
    return(<>
        <View style={{ marginTop: 10 }}>
        <StatusBar
        animated={true}
        backgroundColor="#FC7900"
        />
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='user'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Full Name'
            placeholderTextColor='#f1f2f6'
            textContentType='name'
            autoCompleteType='name'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
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
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='phone'
            type='font-awesome'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Phone'
            placeholderTextColor='#f1f2f6'
            keyboardType='phone-pad'
            returnKeyType='next'
          />
        </View>
        <View style={styles.inputView}>
          <Icon
            style={{ paddingHorizontal: 4, width: 30 }}
            name='lock'
            type='Entypo'
            color='#fff'
            size={22}
          />
          <TextInput
            style={styles.input}
            placeholder='Password'
            placeholderTextColor='#f1f2f6'
            secureTextEntry={!showRegisterPassword}
            textContentType='password'
            returnKeyType='done'
          />
          <TouchableOpacity
            style={{ paddingVertical: 4 }}
            onPress={() => {
              setShowRegisterPassword(!showRegisterPassword);
            }}
          >
            <Icon
              style={{ paddingHorizontal: 4 }}
              name='eye'
              type='font-awesome'
              color='#fff'
              size={22}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('homeScreen')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
        
        <View style={{justifyContent:'center', alignItems: 'center', marginTop:60}}>
          <View style={{justifyContent: 'center', alignItems: 'center', flexDirection:'row', width:width*0.7}}>
                <View style={{flex: 1, height: 1, backgroundColor: 'white', marginHorizontal:10}} />
                <Text style={{color:'white'}}>Or Sign Up With</Text>
                <View style={{flex: 1, height: 1, backgroundColor: 'white',marginHorizontal:10}} />
              </View>
          <View
            style={[
              styles.socialLoginView,
              { marginTop: 14, justifyContent: 'flex-start' },
            ]}
          >
            <TouchableOpacity
              style={[styles.socialLoginTouchable, { marginLeft: 0 }]}
            >
              <Icon name='google' type='font-awesome' color='#F16529' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialLoginTouchable}>
              <Icon name='facebook' type='font-awesome' color='#F16529' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>)
  }

  if (!loaded) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  return(
    <SafeAreaView>
      <View style={{backgroundColor: '#FC7900', height: height}}>
        
        <View style={{marginTop:15, paddingVertical:15, marginHorizontal:15}}>
            {activeTab === 'Login' ? 
            
            <View>
              <Text style={styles.welcomeText}>Welcome Back</Text>
              <Text style={styles.welcomeTextTop}>enjoy the stay.</Text>
            </View>
            
             :<View>
                <Text style={styles.welcomeText2}>Create Account</Text>
                <Text style={styles.welcomeTextTop}>enter your valid credentials to register.</Text>
             </View>
             }
        </View>

        <View style={styles.switchTabsView}>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Login' ? 4 : 0,
              borderBottomColor: '#fff',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderBottomWidth: activeTab === 'Register' ? 4 : 0,
              borderBottomColor: '#fff',
              paddingHorizontal: 4,
              marginRight: 14,
            }}
            onPress={() => switchTab()}
          >
            <Text style={styles.switchText}>Register</Text>
          </TouchableOpacity>
        </View>
        {activeTab === 'Login' ? <Login /> : <Register />}
      </View>
      
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  welcomeText: {
    alignSelf: 'flex-start',
    fontSize: 35,
    fontFamily: 'NSBold',
    marginTop: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  welcomeText2: {
    alignSelf: 'flex-start',
    fontSize: 30,
    fontFamily: 'NSBold',
    marginTop: 10,
    color: '#fff',
    textTransform: 'uppercase',
  },
  switchTabsView: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  switchText: {
    padding: 2,
    fontSize: 18,
    color: '#fff',
    fontFamily: 'NSLight',
  },
  inputView: {
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: '#fff',
    marginTop: 25,
    marginHorizontal: 20,
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
    marginHorizontal: 20,
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
  buttonText: { fontFamily: 'NSBold', fontSize: 16, color: '#E44D26',textTransform:'uppercase' },
  forgotPasswordText: {
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: 'flex-end',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'NSBold',
  },
  socialLoginView: {
    marginTop: 80,
    marginHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLoginTouchable: {
    backgroundColor: '#fff',
    width: 40,
    height: 40,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  welcomeTextTop:{
    fontSize: 12,
    letterSpacing: 0.3,
    paddingHorizontal: 6,
    color: 'white',
    fontFamily: 'NSLight'
  }
});

export default LoginRegisterScreen