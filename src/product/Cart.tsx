import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import apiData from '../data/data';
import { addCartItem, addNweProduct1, removeCartItem, removeCartWithMinus2 } from '../reduxtoolkit/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { addNweProduct, removeCart, removeCartWithMinus } from '../reduxtoolkit/newSlice';

// useEffect(()=>{
//     apiData
// },[])

const Cart = () => {
 const items = useSelector(state => state.new1)
 console.log("hello",items)
    const dispatch = useDispatch();
    const rmoveItem = index => {
        dispatch(removeCart(index))
        
        
    }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
           <FlatList
                data={items}
                renderItem={({ item,index }) => {

                    return (
                        <View style={{ flex: 1 }}>

                            <View style={{ backgroundColor: "#FFFFFF", margin: 10 }}>
                                <View style={{marginRight:200}}>
                                <Image source={{ uri: item.image }} style={{ height: 100, width: "100%", resizeMode: 'center', borderWidth: 2, borderBottomRightRadius: 12, backgroundColor: 'gray' }} />
</View>




                                <TouchableOpacity>
                                    <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text style={{width:60,left:10}}> ${item.price}</Text>

                                    {/* { item.qty !== 0 ?
                                        <TouchableOpacity style={{ marginLeft: 100 }} onPress={() => {
                                            rmoveItem(index)

                                        }}>
                                            <Text style={{ backgroundColor: "green", width: 120, margin: 10, textAlign: 'center', borderRadius: 3, color: '#FFF', paddingVertical: 5, marginLeft: 60 }}>remove to cart</Text>
                                        </TouchableOpacity>
                                        : null} */}

                                    {item.qty ==0 ? null : (<TouchableOpacity  onPress={() => {
                                        if(item.qty>1){
                                            dispatch(removeCartWithMinus(item)) 
                                            dispatch(removeCartWithMinus2(item.id))
                                        }else{
                                            dispatch(removeCart(index)) 
                                            dispatch(removeCartWithMinus2(item.id))
                                            
                                        }
                                           

                                        }} >
                                        <Text style={{ backgroundColor: "green", textAlign: 'center', borderRadius: 3, paddingHorizontal: 12, color: '#FFF', paddingVertical: -2, fontSize: 20, marginLeft: 150 }}>-</Text>
                                    </TouchableOpacity>)}
                                    {item.qty == 0 ? null : (<TouchableOpacity >
                                        <Text style={{  textAlign: 'center', borderRadius: 3, paddingHorizontal: 10, color: 'gray', paddingVertical: 5, margin: 5 }}>{item.qty}</Text>
                                    </TouchableOpacity>)}
                                    {item.qty== 0 ? null : (<TouchableOpacity  onPress={()=>{    dispatch(addNweProduct(item))
                                     dispatch(addNweProduct1(item.id))}}>
                                        <Text style={{ backgroundColor: "green", textAlign: 'center', borderRadius: 3, paddingHorizontal: 10, color: '#FFF', paddingVertical: 5 }}>+</Text>
                                    </TouchableOpacity>)}

                                </View>
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
