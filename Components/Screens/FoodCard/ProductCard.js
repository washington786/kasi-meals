import { StyleSheet, Text, View, Dimensions,Image} from 'react-native'
import React from 'react'

const width = Dimensions.get('screen').width;

const ProductCard=({productName,price,image})=>{

    return(
        <View style={{backgroundColor:'#fff',borderRadius:10, width: '100%', height: 70, paddingVertical:3, paddingHorizontal:5}}>
                              
          <View style={styles.foodAvailableCard}>
              <View style={{width: '100%', height:60,flexDirection:'row', alignItems: 'center', paddingHorizontal:5, backgroundColor:'#eee'}}>
                  <Image source={{uri:image}} style={{width:50, height: 50,resizeMode:'cover', borderRadius:5}}/>
                  <Text style={{fontSize:10,fontWeight:'bold',color:'black', marginHorizontal:5}}>{productName}</Text>
                  <Text style={{position:'absolute',bottom:2, right: 2, color:'#ff0000', fontWeight:'bold', fontSize:10}}>R{price}</Text>
              </View>
          </View>
  
      </View>
    )
  
  }
  export default ProductCard;

const styles = StyleSheet.create({
    foodAvailableCard:{
        width:width*0.38,
        height: 60,
        backgroundColor:'#fff',
        elevation: 2,
        borderRadius:5,
        position:'relative',
    }
})

