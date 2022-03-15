import { View, Text,TouchableOpacity,Image,StyleSheet,Dimensions} from 'react-native';
import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function RestaurantsCard({
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
    screenWidth,
}){
    return(
        <TouchableOpacity>
                <View style={styles.cardViewFood}>
                    <View style={styles.cardViewFood2}>
                        <Image source={{uri: images}} style={styles.displayImage}/>

                        <View style={styles.restaurantContent}>

                        <Text style={styles.restName}>{restaurantName}</Text>

                        <View style={styles.resLocationView}>
                            <EntypoIcons name='location-pin' size={15} color='grey'/>
                            <Text style={styles.resLocationText}>{businessAddress}</Text>
                        </View>

                        <Text style={styles.farAwayText}>{farAway} Min away</Text>
                        </View>

                        <View style={styles.reviewView}>
                            <Text style={styles.reviewText}>{averageReviews}</Text>
                            <Text style={styles.reviewAverage}>{numberOfReviews} reviews</Text>
                        </View>
                    </View>

                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    //  card food
    cardViewFood:{
        height: 120,
        width: width*0.85,
        position: 'relative',
        justifyContent: 'flex-start',
        marginHorizontal:5
      },
      cardViewFood2:{
        backgroundColor:'#eee',
        elevation:0.2,
        width: width*0.85,
        height: 120,
        position:'relative',
        bottom:0,
        justifyContent: 'space-around', 
        alignItems: 'center',
        borderRadius:15,
        display: 'flex',
        flexDirection: 'row',
      },
      displayImage:{
        width: 100,
        height: 100,
        borderRadius:100,
        marginHorizontal:10,
        marginVertical:5,
        resizeMode:'cover'
      }
      ,restaurantContent:{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign:'left',
        position: 'relative',
        width: 220,
        height:60
      },
      restName:{
        fontSize: 14,
        fontWeight: '500',
        textAlign:'left',
        paddingTop:5,
        position:'absolute',
        left: 8
      },
      farAwayText:{
        fontSize:9,
        fontWeight:'100',
        position:'absolute',
        left: 12,
        top:40
      },
      resLocationText:{
        fontSize:9,
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
        color:'#fff',
        fontSize:15
      },
      reviewAverage:{
        color:'#fff',
        fontSize:8
      },
      reviewView:{
        position:'absolute',
        bottom:0, 
        right:5,
        backgroundColor:'#ff0000',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        padding:8,
        justifyContent:'center', alignItems:'center'
      }
})