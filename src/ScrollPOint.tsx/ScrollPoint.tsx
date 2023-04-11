import React,{useState} from 'react';
import { View, Text,FlatList,ScrollView ,TouchableOpacity,Dimensions,Image,Button} from 'react-native';
const { height, width } = Dimensions.get('screen')
const ScrollPoint = () => {
    
   const data1=[1,2,3,4,5,6,7,8]
   const data2=[1,,2,3,4,5,6,7,8,9,10,11]
   const [currantIndex, setCurrantIndex] = useState<any>(0);
  return (
    <View  >
        <ScrollView>
      <View style={{backgroundColor:'red',height:80}}></View>
      <View style={{alignSelf:'center',backgroundColor:'#FFF',height:170,width:170,borderRadius:100,marginTop:-60}}></View>

<View style={{alignSelf:'center',height:20,width:20,borderRadius:20,borderWidth:2,borderColor:"red",marginTop:-16,marginRight:-40}}><Text>\~~</Text></View>
      <FlatList
       onScroll={(e) => {
        const x = e.nativeEvent.contentOffset.x;
        setCurrantIndex((x / width).toFixed(0));
        
        console.log(currantIndex);
        
      }}
      
    
      
      data={data2}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>{ 
        console.log(currantIndex);
              
        return(
            <TouchableOpacity >
                <View style={{width:"100%",alignItems:'center',justifyContent:'center'}}>
            <View style={{height:currantIndex==index?150:100,width:width-20,marginHorizontal:10,borderRadius:20,alignSelf:'center',justifyContent:'center',marginTop:currantIndex==index?10:30}}>
                <View style={{}}>
                    <Image source={{uri:'https://st2.depositphotos.com/5547208/8113/v/950/depositphotos_81139896-stock-illustration-online-shopping-banner.jpg'}} style={{width:width,height:currantIndex==index?150:100,borderRadius:5,alignSelf:'center'}}/>
                </View>
                </View>
                </View>
                </TouchableOpacity>
            
        )
      }}
      />
    
      <View style={{alignItems:'center',marginTop:10}}>
      <FlatList
data={data2}
horizontal
renderItem={({item,index})=>{
  return(
    <TouchableOpacity >
  
    <View style={{height:10,width:currantIndex==index?30:10,borderRadius:10,backgroundColor:currantIndex==index?"red":null,alignSelf:'center',margin:3,borderWidth:1,borderColor:'red'}}></View>
    </TouchableOpacity>
  )
}}

      />
      {/* <View style={{flexDirection:"row",justifyContent:'space-between'}}>
      <TouchableOpacity onPress={()=>setCurrantIndex(currantIndex-1)}><Text>back</Text></TouchableOpacity>
       <TouchableOpacity onPress={()=>setCurrantIndex(currantIndex-1)}><Text>back</Text></TouchableOpacity>
        </View> */}
      </View>

     
       <FlatList
      data={data1}
    //   horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
     
        return(
           
            <View style={{backgroundColor:'green',height:70,width:350,margin:20,borderRadius:20,alignSelf:'center',justifyContent:'center',marginHorizontal:10}}>
                <View style={{backgroundColor:'#FFF',height:100,width:100,borderRadius:50,justifyContent:'center',marginLeft:-10,borderColor:'green',borderRightColor:"red",borderWidth:2}}></View>

                </View>
              
        )
      }}
      />
      </ScrollView>
    </View>
  );
}

export default ScrollPoint;