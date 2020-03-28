import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import appStyle from "../../../../style/appStyle";

const SUB_HEADER_HEIGHT = 30;

type PropsType = {};

export class NewsfeedSubHeader extends Component<PropsType> {
  render() {
    return (
      <View style={styles.subHeader}>
        <Text> Prochains Evènements</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  subHeader: {
    borderColor: appStyle.color.black,
    borderWidth: 1,
    height: SUB_HEADER_HEIGHT,
    justifyContent: "center",
    alignItems: "center"
  }
});
