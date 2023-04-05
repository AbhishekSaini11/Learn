import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import apiData from '../data/data';
import { addCartItem } from '../reduxtoolkit/cartslice';
import { useDispatch, useSelector } from 'react-redux';

// useEffect(()=>{
//     apiData
// },[])

const PRODUCT = ({navigation}) => {

 const addedItem = useSelector(state => state)
 console.log(addedItem)
    const dispatch = useDispatch();
    const addItem = (item) => {
        dispatch(addCartItem(item))
        
        
    }
    
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{height:50,backgroundColor:'#FFFFFF',width:"100%" ,fontSize:30}}> cart {addedItem.cart.length}</Text>
            <FlatList
                data={apiData}
                renderItem={({ item }) => {

                    return (
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={()=>navigation.navigate("Cart")}>
                            <Text>{item.title}</Text>
                            </TouchableOpacity>
                            <View style={{}}>
                                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderColor: "gray", borderWidth: 2, borderBottomRightRadius: 12, backgroundColor: 'gray' }} />
                          
                          
                          
                          <TouchableOpacity  onPress={() => {
                                    addItem(item);
                                }}>
                                    <Text style={{ backgroundColor: "green", width: 120, margin: 10 }}>ADD TO CART</Text>
                                </TouchableOpacity>
                
                            </View>
                        </View>
                    )
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        textAlign: 'center',
        margin: 4

    }
})
export default PRODUCT;
