import React, { useEffect, useRef, useState } from 'react';
import { View, Text,TextInput,StyleSheet, TouchableOpacity } from 'react-native';




const Otp = () => {
const otref=useRef<any>();
const otref1=useRef<any>();
const otref2=useRef<any>();
const otref3=useRef<any>();
const otref4=useRef<any>();
    const[otp,setOtp]=useState("")
    const[otp1,setOtp1]=useState("")
    const[otp2,setOtp2]=useState("")
    const[otp3,setOtp3]=useState("")
    const[otp4,setOtp4]=useState("")
   
    const [timerCount, setTimer] = useState(30)
    
useEffect(() => {
  let interval = setInterval(() => {
    setTimer(lastTimerCount => {
        lastTimerCount <= 1 && clearInterval(interval)
        return lastTimerCount-1
        

    })
  }, 1000) //each count lasts for a second
  //cleanup the interval on complete
  return () => clearInterval(interval)
}, []);

  
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}> 
      <Text style={{color:"red",fontSize:29}}>Enter Otp</Text>
      <View style={{flexDirection:'row'}}>
        <TextInput keyboardType='number-pad'value={otp} style={styles.text} maxLength={1} 
         ref={otref} onChangeText={txt=> {setOtp(txt) ;
        if(txt.length>=1){
            otref1.current.focus();
        }
        else if(txt.length==0){
            otref.current.focus();
        }}}
        />

        <TextInput keyboardType='number-pad' value={otp1} style={styles.text} maxLength={1} onChangeText={txt=>{setOtp1(txt);
        if(txt.length>=1){
            otref2.current.focus();
        } else if(txt.length==0){
            otref.current.focus();
        }
        }}ref={otref1}/>
         <TextInput keyboardType='number-pad' value={otp2} style={styles.text} maxLength={1} onChangeText={txt=>{setOtp2(txt);
        if(txt.length>=1){
            otref3.current.focus();
        } else if(txt.length==0){
            otref1.current.focus();
        }
        }}ref={otref2}/>
         <TextInput keyboardType='number-pad' value={otp3} style={styles.text} maxLength={1} onChangeText={txt=>{setOtp3(txt);
        if(txt.length>=1){
            otref4.current.focus();
        } else if(txt.length==0){
            otref2.current.focus();
        }
        }}ref={otref3}/>

          <TextInput keyboardType='number-pad'  value={otp4} style={styles.text} maxLength={1} ref={otref4} onChangeText={txt=>{setOtp4(txt);
        if(txt.length==0){
            otref3.current.focus();
        } }}/>
        
        
      </View>
      <View style={{flexDirection:'row',marginRight:-150}}>
      <Text>{timerCount} </Text>
      <TouchableOpacity onPress={()=>setTimer(30)}>
      <Text style={{color:timerCount==0?"red":"blue"}}>Resend Otp</Text>
      </TouchableOpacity>
      </View>
<TouchableOpacity
disabled={
  otp!==""&& 
  otp1!=="" &&
   otp2!=="" && 
   otp3!=="" && 
   otp4!==""? false : true
}
style={{
  backgroundColor:
  otp!==""&& 
  otp1!=="" &&
   otp2!=="" && 
   otp3!=="" && 
   otp4!==""? "blue" : "red",
   marginTop:40,width:250,padding:10,borderRadius:10}}>
  <Text style={{textAlign:'center',color:"#FFFFFF",fontWeight:'700'}}>Verify Otp</Text>
</TouchableOpacity>

    </View>
  );
}

const styles=StyleSheet.create({
    text:{
        borderWidth:1,
        padding:10,
        borderRadius:8,
        textAlign:'center',
        margin:4
        
    }
})
export default Otp;
