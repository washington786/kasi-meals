import React from 'react'
import { StyleSheet, Text, View,Dimensions,Image, FlatList} from 'react-native'
import ProductCard from './ProductCard';
import { Divider } from 'react-native-elements';

const width = Dimensions.get('screen').width;

const FoodSearchCard = ({
    onPressFoodCard,
    restaurantName,
    deliveryAvailable,
    discountAvailable,
    discountPercent,
    numberOfReviews,
    averageReviews,
    businessAddress,
    farAway,
    images,
    productData
}) => {
  return (
      <View style={styles.cardViewFood}>
                <View style={styles.cardViewFood2}>

                    {/* restaurant */}
                    <View style={{flexDirection:'row', position:'relative', alignItems: 'center', justifyContent: 'flex-start', height: 90}}>
                        <Image style={styles.displayImage} source={{uri:images}}/>

                        <View style={{paddingHorizontal:15}}>
                            <Text style={styles.restName}>{restaurantName}</Text>
                            <Text style={styles.resLocationText}>{businessAddress}</Text>
                            <Text style={styles.farAwayText}>{farAway} min away</Text>
                        </View>

                        <View style={{position: 'absolute',top:2,right:5, justifyContent: 'center', alignItems: 'center'}}>

                            <Text style={styles.reviewAverage}>{averageReviews}</Text>
                            <Text style={styles.reviewText}>{numberOfReviews} people reviewed</Text>

                        </View>
                    </View>

                    <Divider style={{width: width*0.9, alignItems: 'center', alignSelf:'center', paddingTop:10, marginBottom:2}}/>

                    {/* food available */}
                    {/* <View>
                      <FlatList
                          data={productData}
                          keyExtractor={(item)=>item.id}
                          horizontal = {true}
                          // showsHorizontalScrollIndicator={false}
                          renderItem={({item,index})=>(
                            <ProductCard
                              image = {item.productImage}
                              productName = {item.productName}
                              price = {item.productPrice}
                            />
                          )}
                        />
                      
                    </View> */}
                   
                </View>
            </View>
  )
}

export default FoodSearchCard

const styles = StyleSheet.create({
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
    }
})