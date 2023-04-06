import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Route from './Route';
import apiData from '../data/data';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../reduxtoolkit/cartslice';


const Main= () => {
    const dispatch =useDispatch();
    
    useEffect(()=>{
apiData.map((item)=>{
    dispatch(addCartItem(item));

})
    },[])

  return <Route/>;
  
}

export default Main;
