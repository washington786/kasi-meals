import { View, Dimensions} from 'react-native'
import React from 'react'
import SearchComponent from '../SearchComponent/SearchComponent';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width

const SearchScreen = () => {
  return (
    <View style={{width: width, height: height, backgroundColor:'#ffffff'}}>
      <SearchComponent/>
    </View>
  )
}

export default SearchScreen