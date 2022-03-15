import { View, Text,StyleSheet,Dimensions,TouchableOpacity, ScrollView, FlatList, Pressable,Image} from 'react-native'
import React,{ useState} from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Header from './Header';
import { categoryData } from '../../Data/CategoryData';
import { RestaurantData } from '../../Data/RestaurantData';
import FoodCard from '../FoodCard/FoodCard';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const HomeScreen = () => {

  const [delivery, setDelivery] = useState(true);
  const [indexCheck,setIndexCheck] = useState('0');

  // const PopularFoodCard=()=>{
  //   return(
  //     <>
  //       <View style={styles.cardViewFood}>
  //         <View style={styles.cardViewFood2}>
  //             <Image source={{uri: 'https://images.pexels.com/photos/2611917/pexels-photo-2611917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'}} style={styles.displayImage}/>

  //             <View style={styles.restaurantContent}>

  //               <Text style={styles.restName}>Mikes Kitchen Food</Text>

  //               <View style={styles.resLocationView}>
  //                 <EntypoIcons name='location-pin' size={15} color='grey'/>
  //                 <Text style={styles.resLocationText}>23 Florah Strt, Polokwane</Text>
  //               </View>

  //               <Text style={styles.farAwayText}>12.30 Min away</Text>

  //               <Text style={styles.reviewAverage}>4.4</Text>

  //               <Text style={styles.reviewText}>206 reviews</Text>
                

  //             </View>
  //         </View>

  //         </View>
  //     </>
  //   )
  // }

  return (
    <View style={styles.container}>
        
        {/* header */}
        <Header/>

      <ScrollView
        // stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{height: height, width: width, backgroundColor:'#fff'}}
      >
        {/* delivery and pick up buttons */}
        <View style={styles.buttonsView}>

            <TouchableOpacity style={styles.buttons} onPress={() =>{setDelivery(true)}}>
                <View style={{backgroundColor: delivery?'#E44D26':'#eee', flexDirection:'row', padding:5, borderRadius:40, justifyContent:'space-evenly', alignItems: 'center', elevation:5}}>
                  <Icon name="motorcycle" size={20} color={delivery?'#fff':'#333'} style={{padding:3}}/>
                  <Text style={{color:delivery?'#fff':'#333', padding:3}}>Delivery</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttons} onPress={() =>{setDelivery(false)}}>
                <View style={{backgroundColor: delivery?'#eee':'#E44D26', flexDirection:'row', padding:5, borderRadius:40,justifyContent:'space-evenly', alignItems: 'center', elevation:5}}>
                  <Icons name="car-pickup" size={20} color={delivery?'#333':'#fff'} style={{padding:3}}/>
                  <Text style={{color:delivery?'#333':'#fff', padding:3}}>Pick Up</Text>
                </View>
            </TouchableOpacity>
        </View>

      {/* location and delivery */}
      <View style={{flexDirection:'row', justifyContent:'space-between', alignItems: 'center', paddingVertical:10}}>
        <View style={styles.locationView}>

          <EntypoIcons name="location-pin" size={18} color='#333'/>

          <Text>134 Pietersburg str,ladine</Text>
        </View>
        <Icons name="filter-variant" size={30} color='#000' style={{paddingHorizontal:20}}/>
      </View>

      {/* categories */}
      <View style={styles.categoriesView}>

        <Text style={styles.title}>Categories</Text>

        {/* category list */}
        <View style={{marginVertical:6, marginHorizontal:6, paddingVertical:5}}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {categoryData}
            keyExtractor={(item) => item.id}
            extraData={indexCheck}
            renderItem={({item,index})=>(
              <Pressable style={{padding:4}} onPress={()=>setIndexCheck(item.id)}>
                <View style={indexCheck===item.id? {...styles.cardViewSelected}:{...styles.cardView}}>

                  <Image source={item.image} style={{height: 60, width: 60, borderRadius:40}}/>
                  <Text style={indexCheck===item.id?{...styles.categoryTextSelected}:{...styles.categoryText}}>{item.name}</Text>
                  
                </View>
              </Pressable>
            )}
          />
        </View>

      </View>

      
      <View style={styles.categoriesView}>

        <Text style={styles.title}>Popular Places</Text>

        {/* popular places list */}
        <View style={{marginVertical:6, marginHorizontal:20, paddingVertical:5}}>

              <FlatList
                data={RestaurantData}
                keyExtractor={(item,index)=>index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                  <>
                    <FoodCard
                      images = {item.displayImage}
                      farAway = {item.distance}
                      businessAddress = {item.address}
                      numberOfReviews = {item.numberOfReviews}
                      averageReviews = {item.averageReviews}
                      restaurantName = {item.name}
                    />
                  </>
                )}
              />
        </View>
      </View>

      <View style={styles.categoriesView}>
              
          <Text style={styles.title}>Restaurants In Your Area</Text>

          {/* popular places list */}
          <View style={{marginVertical:6, marginHorizontal:20, paddingVertical:5}}>

              

          </View>

      </View>


      </ScrollView>
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor:'#ffffff',
    },
    title: {
        fontWeight:'bold',
        fontSize: 18,
        color:'#333', marginHorizontal:20
    },
    buttonsView:{
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      padding:5,
      justifyContent: 'space-evenly'
    },
    buttons:{
      width: 160,
      marginHorizontal:5
    },
    locationView:{
      flexDirection: 'row',
      marginHorizontal: 20,
      alignItems: 'center',
      paddingTop: 10
    },
    categoriesView:{
      marginHorizontal: 5,
      marginVertical:10,
      justifyContent: 'flex-start'
    },
    cardView:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 80,
      height: 100,
      backgroundColor: '#eee',
      color: '#333',
      elevation:5,
      marginHorizontal:10,
      borderRadius:20,
    },
    cardViewSelected:{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10,
      width: 80,
      height: 100,
      backgroundColor: '#E44D26',
      color: '#FFFFFF',
      elevation:5,
      marginHorizontal:10,
      borderRadius:20,
    },
    categoryTextSelected:{
      fontSize: 10,
      color:'#fff'
    },
    categoryText:{
      fontSize: 10,
      color:'#333'
    },
    // card food
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