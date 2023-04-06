import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList, Image } from 'react-native';
import apiData from '../data/data';
import { addCartItem, addNweProduct1, removeCartWithMinus2 } from '../reduxtoolkit/cartslice';
import { useDispatch, useSelector } from 'react-redux';
import { addNweProduct, removeCartWithMinus } from '../reduxtoolkit/newSlice';

// useEffect(()=>{
//     apiData
// },[])

const PRODUCT = ({ navigation }) => {


    const [count, setCount] = useState(0)

    const addedItem2 = useSelector(state => state.cart);
    const addedItem = useSelector(state => state.new1)
    // console.log(addedItem)

    const dispatch = useDispatch();

    const getTotal = () => {
        let total = 0;
        addedItem.map((item) => {
            total = total + item.qty * item.price;
        })
        return Math.floor(total);
    }

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {/* <Text style={{height:50,backgroundColor:'#FFFFFF',width:"100%" ,fontSize:30}}> cart {addedItem.cart.length}</Text> */}
            <FlatList
                data={addedItem2}
                renderItem={({ item }) => {

                    return (
                        <View style={{ flex: 1 }}>

                            <View style={{ backgroundColor: "#FFFFFF", margin: 10 }}>
                                <Image source={{ uri: item.image }} style={{ height: 200, width: "100%", resizeMode: 'center', borderWidth: 2, borderBottomRightRadius: 12, backgroundColor: 'gray' }} />





                                <TouchableOpacity>
                                    <Text style={{ marginLeft: 10 }}>{item.title}</Text>
                                </TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                    <Text> ${item.price}</Text>

                                    {item.qty == 0 ?
                                        <TouchableOpacity style={{ marginLeft: 100 }} onPress={() => {
                                            dispatch(addNweProduct(item))
                                            dispatch(addNweProduct1(item.id))

                                        }}>
                                            <Text style={{ backgroundColor: "green", width: 120, margin: 10, textAlign: 'center', borderRadius: 3, color: '#FFF', paddingVertical: 5, marginLeft: 60 }}>ADD TO CART</Text>
                                        </TouchableOpacity>
                                        : null}

                                    {item.qty == 0 ? null : (<TouchableOpacity onPress={()=>{dispatch(removeCartWithMinus2(item.id))
                                    dispatch(removeCartWithMinus(item)) }} >
                                        
                                        <Text style={{ backgroundColor: "green", textAlign: 'center', borderRadius: 3, paddingHorizontal: 12, color: '#FFF', paddingVertical: -2, fontSize: 20, marginLeft: 150 }}>-</Text>
                                    </TouchableOpacity>)}
                                    {item.qty == 0 ? null : (<TouchableOpacity >
                                        <Text style={{ backgroundColor: "green", textAlign: 'center', borderRadius: 3, paddingHorizontal: 10, color: '#FFF', paddingVertical: 5, margin: 5 }}>{item.qty}</Text>
                                    </TouchableOpacity>)}
                                    {item.qty == 0 ? null : (<TouchableOpacity onPress={()=>{ dispatch(addNweProduct1(item.id))
                                      dispatch(addNweProduct(item))
                                    }} >
                                        <Text style={{ backgroundColor: "green", textAlign: 'center', borderRadius: 3, paddingHorizontal: 10, color: '#FFF', paddingVertical: 5 }}>+</Text>
                                    </TouchableOpacity>)}

                                </View>
                            </View>
                        </View>
                    )
                }}
            />
            <View style={{ height: 120, backgroundColor: '#FFF', width: "90%", borderWidth: 2, flexDirection: 'row', justifyContent: 'space-around', borderRadius: 8 }}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={{ backgroundColor: '#FFFFFF', width: "100%", fontSize: 20, color: "#000", marginTop: 7 }}>  added ({addedItem.length})</Text>
                    <Text style={{}}> Total ({getTotal()}) </Text>
                </View>

                <View>
                    <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
                        <Text style={{ backgroundColor: "green", width: "100%", fontSize: 20, color: "#FFF", marginTop: 10, paddingHorizontal: 15, borderRadius: 8 }}>See Cart</Text>
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
export default PRODUCT;
