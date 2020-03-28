import React from "react";
import { View, StyleSheet, Text } from "react-native";

type PropsType = {
  operation: string;
  date: string;
  amount: string;
};

export function OperationLine(props: PropsType) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.operationContainer}>
        <Text style={styles.operationText}>{props.operation}</Text>
        <Text style={styles.dateText}>{props.date}</Text>
      </View>
      <View style={styles.amountContainer}>
        <Text style={styles.amountText}>{props.amount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 6,
    marginVertical: 5,
    marginHorizontal: 10,
    flexDirection: "row",
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#E8EDE8"
  },
  operationContainer: {
    flex: 5
  },
  operationText: {
    fontSize: 15,
    fontWeight: "600"
  },
  dateText: {
    color: "#CFD4CF",
    fontSize: 10
  },
  amountContainer: {
    flex: 1,
    alignItems: "flex-end"
  },
  amountText: {
    color: "#CFD4CF",
    fontSize: 13
  }
});
