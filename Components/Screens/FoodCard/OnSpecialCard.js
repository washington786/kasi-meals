import { View, Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import React from 'react';
import EntypoIcons from 'react-native-vector-icons/Entypo';

// count down component
import CountDown from 'react-native-countdown-component'; 
export default function OnSpecialCard({
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
}) {
  return (
    <TouchableOpacity>
        <View style={styles.cardViewFood}>
          <View style={styles.cardViewFood2}>
              <Image source={{uri: images}} style={styles.displayImage}/>

              <View style={{position: 'absolute', top: 0, right: 10, backgroundColor:'#333', padding:2, justifyContent:'center',alignItems:'center',borderBottomRightRadius:10,borderBottomLeftRadius:10}}>
                <Text style={{color:'#eee', fontSize:8, paddingVertical:3}}>Free Delivery</Text>
                <CountDown
                  until={60 * 10 + 30}
                  size={8}
                  // onFinish={() => alert('Finished')}
                  digitStyle={{backgroundColor: '#FF0000'}}
                  digitTxtStyle={{color: '#fff'}}
                  timeToShow={['M', 'S']}
                  timeLabels={{m: 'Min', s: 'Sec'}}
                  timeLabelStyle={{color: '#fff'}}
                />
              </View>

              <View style={styles.restaurantContent}>

                <Text style={styles.restName}>{restaurantName}</Text>

                <View style={styles.resLocationView}>
                  <EntypoIcons name='location-pin' size={15} color='grey'/>
                  <Text style={styles.resLocationText}>{businessAddress}</Text>
                </View>

                <Text style={styles.farAwayText}>{farAway} Min away</Text>

                <Text style={styles.reviewAverage}>{averageReviews}</Text>

                <Text style={styles.reviewText}>{numberOfReviews} reviews</Text>
          
              </View>
          </View>
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  cardViewFood:{
    height: 180,
    width: 170,
    position: 'relative',
    padding:2,
    justifyContent: 'flex-start'
  },
  cardViewFood2:{
    backgroundColor:'#eee',
    elevation:0.2,
    width: 160,
    height: 180,
    position:'absolute',
    bottom:0,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    borderRadius:15
  },
  displayImage:{
    width: 100,
    height: 100,
    borderRadius:100,
    marginTop: 15
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
    position:'absolute',
    bottom: 2,
    right:8,
    color:'#ff0000',
    fontSize:6
  },
  reviewAverage:{
    position:'absolute',
    bottom: 10,
    right:8,
    color:'#ff0000'
  }
})
