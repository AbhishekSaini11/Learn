import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image,Vibration } from 'react-native';
import apiData from '../data/data';
import { addCartItem, addNweProduct1, removeCartItem, removeCartWithMinus2 } from '../reduxtoolkit/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { addNweProduct, removeCart, removeCartWithMinus } from '../reduxtoolkit/newSlice';

// useEffect(()=>{
//     apiData
// },[])

const Cart = () => {
    const ONE_SECOND_IN_MS = 1000;
 const items = useSelector(state => state.new1)
 console.log("hello",items)
    const dispatch = useDispatch();
    const rmoveItem = index => {
        dispatch(removeCart(index))
        
        
    } 
    useEffect(()=>{
console.log(Vibration.vibrate())
    },[])
    
   
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>

          <View style={{alignItems:'center',marginTop:10}}>
            <Text style={{color:'red',fontSize:30,position:'absolute'}}>Your Cart  is Empty</Text>
            </View>
           <FlatList
                data={items}
                renderItem={({ item,index }) => {

                    return (
                        <View style={{ flex: 1 }}>

                            <View style={{ backgroundColor: "#FFFFFF", margin:10,padding:10,borderRadius:8,borderBottomWidth:4,borderColor:'#d7ab6c',borderTopWidth:4,elevation:10}}>
                                <View style={{marginRight:20}}>
                                    <View style={{flexDirection:'row'}}>
                                <Image source={{ uri: item.image }} style={{ height: 100,width:100, resizeMode: 'center', borderWidth: 2, borderBottomRightRadius: 12, backgroundColor: 'gray' }} />





                                <TouchableOpacity>
                                    <Text style={{marginTop:20,textAlign:'center',width:200}}>{item.title}</Text>
                                </TouchableOpacity>
                                </View>
                                </View>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text style={{width:60,left:10,color:'#d7ab6c'}}> ${item.price}</Text>

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
                                        <Text style={{ backgroundColor: "#d7ab6c", textAlign: 'center', borderRadius: 3, paddingHorizontal: 12, color: '#FFF', paddingVertical: -2, fontSize: 20,marginLeft:69}}>-</Text>
                                    </TouchableOpacity>)}
                                    {item.qty == 0 ? null : (<TouchableOpacity >
                                        <Text style={{   paddingHorizontal: 10, color: "#d7ab6c", paddingVertical: 5, margin: 5 ,}}>{item.qty}</Text>
                                    </TouchableOpacity>)}
                                    {item.qty== 0 ? null : (<TouchableOpacity  onPress={()=>{    dispatch(addNweProduct(item))
                                     dispatch(addNweProduct1(item.id))}}>
                                        <Text style={{ backgroundColor: "#d7ab6c", textAlign: 'center', borderRadius: 3, paddingHorizontal: 10, color: '#FFF', paddingVertical: 5 }}>+</Text>
                                    </TouchableOpacity>)}

                                </View>
                            </View>
                        </View>
                    )
                }}
            />
             <View style={{ height:80, backgroundColor: '#FFF', width: "90%",borderBottomWidth:3 ,flexDirection: 'row', justifyContent: 'space-around', borderRadius: 8,bottom:0 ,marginBottom:100,marginHorizontal:30,borderTopColor:'#d7ab6c',borderBottomColor:'#d7ab6c'}}>
                <View style={{ alignItems: 'center',justifyContent:'center' }}>
                   
                    <Text style={{}}> Total () </Text>
                </View>

                <View style={{ alignItems: 'center',justifyContent:'center' }} >
                    <TouchableOpacity >
                        <Text style={{ backgroundColor:'#d7ab6c', width: "100%", fontSize: 20, color: "#FFF", paddingHorizontal: 15, borderRadius: 8 }}>CheckOut</Text>
                    </TouchableOpacity>
                </View>

            </View>
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
