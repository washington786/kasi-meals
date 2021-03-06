import React from 'react'
import { StyleSheet, Text, View, Dimensions,TouchableOpacity, FlatList} from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { RestaurantData } from '../../Data/RestaurantData';
 
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const SearchResultsScreen = ({navigation,route}) => {
  return (
    <SafeAreaProvider>
        <View style={{flex:1, padding:10}}>
            <View style={{width: '100%', height:height, backgroundColor:'#eee'}}>
            
            {/* button to navigate back to search screen */}
            <TouchableOpacity onPress={() =>navigation.goBack()}>
                <Icons name='clear' size={30} color='#333' style={{textAlign: 'right', alignItems:'flex-end', justifyContent: 'flex-end'}}/>
            </TouchableOpacity>
            
            <Text style={styles.title}> {RestaurantData.length} Results For {route.params.item}</Text>

          
            </View>
        </View>
    </SafeAreaProvider>
  )
}

export default SearchResultsScreen

const styles = StyleSheet.create({
    container:{
        height: height,
        width: width,
        flex: 1,backgroundColor: '#eee',
        marginHorizontal: 15,
        marginVertical:10,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#ff0000',
        marginBottom: 10

    },
    cardViewFood:{
        height: 180,
        width: 170,
        position: 'relative',
        padding:3,
        justifyContent: 'flex-start'
      },
    cardViewFood2:{
      backgroundColor:'#fff',
      elevation:0.2,
      width: width*0.95,
      height: 180,
      position:'absolute',
      bottom:0,
      justifyContent: 'flex-start', 
      // alignItems: 'center',
      borderRadius:15,
      padding:5
    },
    displayImage:{
      width: 90,
      height: 90,
      borderRadius:100,
    },restaurantContent:{
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      textAlign:'left',
      position: 'relative',
      width: 160,
      height:60
    },
    restName:{
      fontSize: 14,
      fontWeight: '500',
      textAlign:'left'
    },
    farAwayText:{
      fontSize:9,
      fontWeight:'100',
    },
    resLocationText:{
      fontSize:10,
      fontWeight:'100',
      
    },
    resLocationView:{
      position:'absolute',
      left: 8,
      top:23,
      flexDirection: 'row',
      alignItems: 'center',
    },
    reviewText:{
      color:'#ff0000',
      fontSize:6
    },
    reviewAverage:{
      color:'#ff0000'
    },
    foodAvailableCard:{
        width:width*0.3,
        height: 60,
        backgroundColor:'#eee',
        elevation: 2,
        borderRadius:5,
        position:'relative',
    }
})