import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const LabelInput = props => (
  <View style={{padding: 50, width: 300, height: 80, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
    <TextInput style={{height: 100}}
    placeholder={props.title} />
  </View>
);
