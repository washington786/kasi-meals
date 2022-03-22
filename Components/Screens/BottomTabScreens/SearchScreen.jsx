import { View, Dimensions,StyleSheet,Text, FlatList, TouchableWithoutFeedback,Image} from 'react-native'
import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent';
import { categoryData } from '../../Data/CategoryData';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width

const SearchScreen = ({navigation}) => {
  return (
    <View style={{width: width, height: height, backgroundColor:'#ffffff'}}>
      <SearchComponent/>
      
      <View style={styles.categoryView}>
        <Text>Available Categories</Text>
        <View style={{marginTop:20}}>
          <FlatList
            data={categoryData}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>(
              <TouchableWithoutFeedback
                onPress={() =>{navigation.navigate('searchResults',{item: item.name})}}
                >
                  <View style={styles.catView}>
                      <Image source={{uri:item.picture}} resizeMode='cover' style={styles.image}/>
                      <Text style={styles.name}>{item.name}</Text>
                  </View>
              </TouchableWithoutFeedback>
            )}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            numColumns={2}
          />
        </View>
      </View>
    </View>
  )
}

export default SearchScreen;
const styles=StyleSheet.create({
  categoryView:{
    marginVertical: 8,
    marginHorizontal: 5,
    width: '100%',
  },
  catView:{
    width: 170,
    height: 120,
    borderRadius: 10,
    position: 'relative',
    marginVertical:5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#eee',
    marginHorizontal:10,
    marginTop:5
  },
  image:{
    width: '100%',
    height: 120,
    resizeMode:'cover',
    borderRadius: 10
  },
  name:{
    position: 'absolute',
    justifyContent:'center',
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 16, color:'#FFFFFF',
    fontWeight: 'bold'
  }
})