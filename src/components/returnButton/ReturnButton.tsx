import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import appStyle from "../../style/appStyle";

type PropsType = {
  onPress: Function;
};

const styles = StyleSheet.create({
  returnButton: {
    position: "absolute",
    top: appStyle.margins.statusBar,
    justifyContent: "center",
    alignItems: "center",
    height: appStyle.header.containerSize,
    width: appStyle.header.containerSize
  }
});

export const ReturnButton = (props: PropsType) => (
  <TouchableOpacity style={styles.returnButton} onPress={props.onPress}>
    <Icon size={appStyle.header.iconSize} name="leftcircleo" color="white" />
  </TouchableOpacity>
);
