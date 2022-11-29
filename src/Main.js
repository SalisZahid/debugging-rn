import React from 'react';
import {SafeAreaView, Text, TouchableOpacity} from 'react-native';

const Main = () => {
  const btnPressed = () => {
    debugger;
    console.log('<<first>>');
    debugger;
    console.log('<<second>>');
    debugger;
    console.log('<<third>>');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={btnPressed}>
        <Text>abc</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Main;
