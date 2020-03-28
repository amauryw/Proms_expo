import React, { Fragment } from 'react';
import { Text, StyleSheet, TextInput, View } from 'react-native';


type PropsType = {
  title: string;
  value: string
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },
  profileTitle: {
    fontSize: 20,
    color: '#D1E3DE',
  },
  profileInput: {
    fontSize: 25,
  },
});

export const UserFieldModif = (props: PropsType) => {
  return (
    <View style = {styles.mainContainer} >
      <Fragment>
        <Text style={styles.profileTitle}>{props.title}</Text>
        <TextInput 
        style={styles.profileInput}
        placeholder = {props.value}
        />
      </Fragment>
    </View>    
  );
};
