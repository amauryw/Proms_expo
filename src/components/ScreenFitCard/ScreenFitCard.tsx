import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";
import appStyle from "../../style/appStyle";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  card: {
    height: 430,
    borderRadius: 10,
    marginHorizontal: (5 * screenWidth) / 100,
    marginVertical: (8 * screenHeight) / 100,
    backgroundColor: appStyle.color.secondary,
    opacity: 0.9,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.7,
    shadowRadius: 10
  }
});

export const ScreenFitCard = props => {
  return <View style={styles.card}>{props.children}</View>;
};
