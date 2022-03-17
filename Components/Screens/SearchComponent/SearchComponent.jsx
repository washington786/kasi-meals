import React,{ useState} from 'react';
import { StyleSheet, Text, View,Dimensions, TextInput, TouchableWithoutFeedback,Modal, TouchableOpacity, FlatList, Keyboard} from 'react-native'
// icons
import FIcons from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/MaterialIcons';
import { categoryData } from '../../Data/CategoryData';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function SearchComponent() {

const [modalVisible,setModalVisible] = useState(false)

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', paddingTop:10}}>
        
        <TouchableWithoutFeedback
            onPress={() =>{
                setModalVisible(true)
            }}
            >
            <View style={styles.searchCon}>
                <FIcons name='search' size={25} color='grey' style={{paddingHorizontal:5}}/>
                <TextInput style={{flex:1, paddingHorizontal:10}} placeholder="What would you like to eat today?" editable={false} selectTextOnFocus={false}/>
            </View>
        </TouchableWithoutFeedback>

        <Modal
            animationType='fade'
            transparent = {false}
            visible={modalVisible}
        >

            <View style={styles.modal}>
                <View style={{justifyContent: 'flex-end', alignItems:'flex-end', marginHorizontal:10, marginTop:10}}>
                    <TouchableWithoutFeedback onPress={() =>{
                        setModalVisible(false);
                    }}>
                        <Icons name='clear' size={30} color='grey'/>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{justifyContent: 'center', alignItems: 'center', paddingTop:10}}>
                    <View style={styles.searchCon}>
                        <FIcons name='search' size={25} color='grey' style={{paddingHorizontal:5}}/>
                        <TextInput style={{flex:1, paddingHorizontal:10}} placeholder="What would you like to eat today?" editable={true} selectTextOnFocus={true} autoFocus={true}/>
                    </View>
                </View>

                <View style={styles.dataView}>

                    <FlatList
                        data={categoryData}
                        keyExtractor={(item)=> item.id}
                        renderItem={({item})=>(
                            <TouchableOpacity 
                            onPress={() =>{
                                    Keyboard.dismiss
                                    setModalVisible(false)
                                }}
                                >

                                <View style={{marginTop: 20}}>

                                    <Text style={{fontSize: 16, color: 'grey', marginHorizontal:10, marginVertical:5}}>{item.name}</Text>

                                </View>
                                
                            </TouchableOpacity>
                        )}
                    />

                </View>

            </View>

        </Modal>
    </View>
  )
}

// export default SearchComponent

const styles = StyleSheet.create({
    searchCon:{
        width: width*0.95,
        marginVertical:10,
        padding: 8,
        backgroundColor: '#eee',
        flexDirection: 'row',
        alignItems: 'center',
        height: height*0.055,
        borderRadius:2,
        elevation:2
    },
    modal:{
        flex:1,
        backgroundColor: '#ffffff'
    },
    dataView:{
        marginVertical:10,
        marginHorizontal:10
    }

})