import React from 'react';
import { View, Text } from 'react-native';
import Otp from './src/otp/Otp';
import PRODUCT from './src/product/Product';
import Route from './src/navigation/Route';
import { Provider } from 'react-redux';
import mystore from './src/reduxtoolkit/mystore';

const App = () => {
  return (
    <Provider store={mystore}>
  <Route/>
  </Provider>
  );
}

export default App;
