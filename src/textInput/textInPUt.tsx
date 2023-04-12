import React, { useState } from 'react';
import { View, Text,TextInput } from 'react-native';

const textInPUt = () => {
    const [data,setData]=useState({
     name:"",email:""

    })
    const change=(key: string,value: string)=>{
        setData({
            ...data,
            [key]:value
        })
    }
    console.log(data.name)
    console.log(data.email)

  return (
    <View>
      <View style={{backgroundColor:"red",height:60,justifyContent:'center'}}> 
      <Text style={{color:'#FFF',textAlign:'center'}}> TextInputs With One Function</Text>
      </View>
  <TextInput  placeholder='Enter Name' onChangeText={(txt)=>change("name",txt)} value={data.name} style={{width:300,borderBottomWidth:3,borderRightWidth:2,borderRadius:20,marginTop:10,}}/>
  <TextInput placeholder='Enter Email' onChangeText={(txt)=>change("email",txt)} style={{width:300,borderBottomWidth:3,borderRightWidth:2,borderRadius:20,marginTop:10,}}/>
    </View>
  );
}

export default textInPUt;
