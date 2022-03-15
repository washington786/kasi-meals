import { View, Text,StyleSheet,Dimensions} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import MatIcons from 'react-native-vector-icons/MaterialIcons';
import { withBadge } from 'react-native-elements';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const Header = () => {

    // badge for the notifications and cart
    const BadgeIconNotification = withBadge(0)(MatIcons);
    const BadgeIconCart = withBadge(0)(Icons);

  return (
    <View>
        <View style={styles.iconMenuView}>
            <Icon name="stream" size={23} color='#E44D26' style={styles.icon}/>
        </View>
        <View style={styles.contentCon}>
            <View style={styles.textCon}>
                <Text style={styles.title}>Experience the {"\n"}great food</Text>
                <Icons name="silverware-fork-knife" size={23} color='#2B2B2B' style={styles.foodIcon}/>
            </View>

            <View style={styles.iconsRight}>
                <View style={styles.cartView}>
                    {/* <Text style={styles.badgeCart}>1</Text>
                    <Icons name="cart-outline" size={30} color='#2B2B2B' style={{}}/> */}
                    <BadgeIconCart
                        name="cart-outline" size={35} color='#2B2B2B'
                    />
                </View>

                <View style={styles.notView}>
                    {/* <Text style={styles.badgeNotification}>1</Text>
                    <MatIcons name="notifications-none" size={30} color='#2B2B2B' style={{}}/> */}
                    <BadgeIconNotification
                        name="notifications-none" size={35} color='#2B2B2B'
                    />
                </View>
                
            </View>
            
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    iconMenuView: {
        marginVertical: 20,
        marginHorizontal: 20,
        paddingVertical:10,
        paddingHorizontal:6
    },
    contentCon:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    textCon:{
        flexDirection: 'row',
        position: 'relative',
    },
    foodIcon:{
        position: 'absolute',
        bottom: 5,
        right: 30
    },
    title:{
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    iconsRight:{
        flexDirection: 'row',
    },
    cartView:{
        paddingHorizontal:8,
        position: 'relative',
    },
    notView:{
        paddingHorizontal:8,
        position: 'relative',
    },
    badgeCart:{
        position: 'absolute',
        right: 5,
        top: -5,
        color:'#ff0000',
        fontWeight: 'bold',
    },
    badgeNotification:{
        position: 'absolute',
        right: 6,
        top: -3,
        color:'#ff0000',
        fontWeight: 'bold',
    }
})