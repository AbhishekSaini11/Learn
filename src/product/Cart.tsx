import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import apiData from '../data/data';
import { addCartItem, removeCartItem } from '../reduxtoolkit/cartslice';
import { useDispatch, useSelector } from 'react-redux';

// useEffect(()=>{
//     apiData
// },[])

const Cart = () => {
 const items = useSelector(state => state.cart)
 console.log("hello",items)
    const dispatch = useDispatch();
    const rmoveItem = index => {
        dispatch(removeCartItem(index))
        
        
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FlatList
                data={items}
                renderItem={({ item ,index}) => {

                    return (
                        <View style={{ flex: 1 }}>
                            <Text>{item.title}</Text>
                            <View style={{}}>
                                <Image source={{ uri: item.image }} style={{ height: 100, width: 100, borderColor: "gray", borderWidth: 2, borderBottomRightRadius: 12, backgroundColor: 'gray' }} />
                                <TouchableOpacity onPress={() => {
                                    rmoveItem(index);
                                }}>
                                    <Text style={{ backgroundColor: "red", width: 120, margin: 10 }}>RemoveCART</Text>
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
export default Cart;
