import React, { Fragment } from 'react';
import { Text, StyleSheet, View } from 'react-native';

type PropsType = {
  title: string;
  value: string;
};

const styles = StyleSheet.create({
  mainContainer:{
    flex: 1
  },
  profileTitle: {
    fontSize: 18,
    color: '#D1E3DE',
  },
  profileText: {
    fontSize: 21,
  },
});

export const UserField = (props: PropsType) => {
  return (
    <View style={styles.mainContainer}>
      <Fragment>
        <Text style={styles.profileTitle}>{props.title}</Text>
        <Text style={styles.profileText}>{props.value}</Text>
      </Fragment>
    </View>  
  );
};
