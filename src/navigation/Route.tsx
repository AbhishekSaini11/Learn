import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text } from 'react-native';
import PRODUCT from '../product/Product';
import Otp from '../otp/Otp';
import Cart from '../product/Cart';
import calender from '../calender/calender';
import ScrollPoint from '../ScrollPOint.tsx/ScrollPoint';
import textInPUt from '../textInput/textInPUt';



const Route = () => {
    const Stack=createNativeStackNavigator();
  return (
  <NavigationContainer>
<Stack.Navigator >
{/* <Stack.Screen name='calender' component={calender} options={{headerShown:false}}/> */}
<Stack.Screen name='textInput' component={textInPUt} options={{headerShown:false}}/>
<Stack.Screen name='Scroll' component={ScrollPoint} options={{headerShown:false}}/>
<Stack.Screen name='product' component={PRODUCT} options={{headerShown:false}}/>
<Stack.Screen name='Cart' component={Cart}/>
   
    <Stack.Screen name='Otp' component={Otp}/>
</Stack.Navigator>

  </NavigationContainer>
  );
}

export default Route;
