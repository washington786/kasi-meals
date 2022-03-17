import { View, Text,StyleSheet,Dimensions,TouchableOpacity, ScrollView, FlatList, Pressable,Image} from 'react-native'
import React,{ useState} from 'react'
import Icon from 'react-native-vector-icons/Fontisto';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import EntypoIcons from 'react-native-vector-icons/Entypo';
import Header from './Header';
import { categoryData } from '../../Data/CategoryData';
import { RestaurantData } from '../../Data/RestaurantData';
import FoodCard from '../FoodCard/FoodCard';
import RestaurantsCard from '../FoodCard/NearestRestaurants';

// count down component
import OnSpecialCard from '../FoodCard/OnSpecialCard';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const HomeScreen = ({navigation}) => {

  const [delivery, setDelivery] = useState(true);
  const [indexCheck,setIndexCheck] = useState('0');

  return (
    <View style={styles.container}>
        
    {/* header */}
      <Header/>

      <ScrollView
        //  stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        style={{height: height, width: width, backgroundColor:'#fff', paddingBottom:200}}
      >
        {/* delivery and pick up buttons */}
        <View>
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

      {/* restaurants on special */}
      <View style={styles.categoriesView}>
          <Text style={styles.title}>On Special</Text>
          <View style={{marginVertical:6, marginHorizontal:20, paddingVertical:5}}>
          <FlatList
                data={RestaurantData}
                keyExtractor={(item,index)=>index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item})=>(
                  <>
                    <OnSpecialCard
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

      {/* popular restaurants */}
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

      {/* restaurants */}
      <View style={styles.categoriesView}>
              
          <Text style={styles.title}>All Restaurants Near You</Text>

          {/* nearest restaurants list */}
          <View style={{marginVertical:6, marginHorizontal:20, paddingVertical:5, paddingBottom:70}}>
                  
            <FlatList
                  data={RestaurantData}
                  keyExtractor={(item,index)=>index.toString()}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item})=>(
                    <>
                      <RestaurantsCard
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

      </ScrollView>

      {delivery &&
        <View style={styles.floatingButton}>
          <TouchableOpacity onPress={() =>navigation.navigate('mapScreen')}>
              <View>
                    <Icons name='map-search-outline' size={25} color='#ff0000'/>
              </View>
          </TouchableOpacity>
        </View>
      }
        
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container:{
        width: width,
        height: height,
        backgroundColor:'#ffffff',
        position: 'relative',
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
    floatingButton:{
      position: 'absolute',
      right: 8,
      height:60,
      width: 60,
      bottom: 150,
      backgroundColor:'#fff',
      padding: 5,
      borderRadius:40, justifyContent:'center', alignItems: 'center',elevation:5
    }

})