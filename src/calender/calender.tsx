import React, { useState } from 'react';
import { View, Text, TouchableOpacity ,FlatList,Dimensions} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {LocaleConfig} from 'react-native-calendars';

const calender = () => {
    var state = {
        activeDate: new Date()
    } 
    const{height,width}=Dimensions.get("window")
  const    months=["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]
  const Days =["sun","mun","tue","wed","thu","fri","set",]
  const [years,setYear]= useState(2023)
 

 const Date2=[]
  const [count,setCount]=useState(0)
  
  
const getDays = (year: number, month: number) => {
return new Date(year, month, 0).getDate();
};  
const daysInSeptember = getDays(years,count+1); 
  
 const j = new Date(years,count,1).getDay()
    for(let i=0;i<j;i++){
      Date2.push(" ")
    }

  for(let j=1;j<=daysInSeptember;j++){
    Date2.push(j)
    }
console.log(Date2)
console.log(j)

  return (
    <View>

         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <TouchableOpacity style={{margin:10}} onPress={()=>{
                if(count-1>0){
                    setCount(count-1)
                }else{
                    setCount(11)
                    setYear(years-1)
                }
               }
        }>
                <Text>back</Text>
            </TouchableOpacity >
            <Text style={{margin:20,fontWeight:'800',fontSize:30}}>{months[0+count]}</Text>
            <TouchableOpacity  style={{margin:10}} onPress={()=>{
                if(count+1<11){
                    setCount(count+1)
                }else{
                    setCount(0)
                    setYear(years+1)
                    // setYear(years+1)
                }
               }}>
                <Text>next</Text>
            </TouchableOpacity>


         </View>
         <Text style={{alignSelf:'center',borderWidth:2,width:"100%",textAlign:'center'}}>{months[0+count]} {years}</Text>
       
       
         <FlatList
         horizontal
         data={Days}
     renderItem={({item})=>{
        
        return(
       <View style={{backgroundColor:'#3c1a79'}}>
    <Text style={{color:"#FFF",width:height/13,borderRightColor:'#FFF',borderWidth:2}} >{item}</Text>
</View>
        )
     }}
         />
         <View style={{marginTop:10}}>
      

      
          <FlatList
       
         data={Date2}
         numColumns={7}
     renderItem={({item})=>{
        
        return(
       <View style={{backgroundColor:'#94a7ea'}}>
    <Text style={{color:"#FFF",width:height/13,borderRightColor:'#FFF',borderWidth:2,height:height/9}} >{item}</Text>
</View>
        )
     }}
         />
    
       </View>
    </View>
  );
}

export default calender;
