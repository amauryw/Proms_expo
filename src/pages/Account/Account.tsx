import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMyStore } from "../../modules/me/me.hooks";
import { OperationLine } from "../../components/OperationLine/OperationLine";
import { Svg, Path, LinearGradient, Defs, Stop } from "react-native-svg";
import * as shape from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";
import moment from "moment";

type PropsType = {};

const d3 = {
  shape
};

const { width } = Dimensions.get("window");
const height = 140;
const verticalPadding = 5;

const getAccountValue = (operation: IOperationFromDB[], date: Date): number =>
  operation.reduce((acc: number, curr: IOperationFromDB) => {
    if (moment(curr.created_at).isAfter(moment(date))) return acc;
    return acc + curr.value;
  }, 0);

const formatOperationToLine = (operations: IOperationFromDB[]): IData[] =>
  operations.map(operation => ({
    x: operation.created_at,
    y: getAccountValue(operations, operation.created_at)
  }));

const fakeOperations = [
  {
    id: 0,
    description: "Wix de proms", // "Paiement fignss"  "Remboursement manip" "cotisation"
    user_id: 12,
    created_at: new Date(2019, 9, 1),
    value: 100
  },
  {
    id: 1,
    description: "Wix de proms", // "Paiement fignss"  "Remboursement manip" "cotisation"
    user_id: 12,
    created_at: new Date(2019, 9, 16),
    value: -10
  },
  {
    id: 2,
    description: "Wix de proms", // "Paiement fignss"  "Remboursement manip" "cotisation"
    user_id: 12,
    created_at: new Date(2019, 9, 17),
    value: 59
  },
  {
    id: 3,
    description: "Wix de proms", // "Paiement fignss"  "Remboursement manip" "cotisation"
    user_id: 12,
    created_at: new Date(2019, 10, 2),
    value: 90
  }
];

const scaleX = scaleTime()
  .domain([new Date(2019, 9, 1), new Date(2019, 10, 4)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height - verticalPadding, verticalPadding]);

const data = formatOperationToLine(fakeOperations);

const line = d3.shape
  .line()
  // @ts-ignore
  .x(d => scaleX(d.x))
  // @ts-ignore
  .y(d => scaleY(d.y))
  // @ts-ignore
  .curve(d3.shape.curveBasis)(data);

interface IOperationFromDB {
  id: number;
  description: string; // "Paiement fignss"  "Remboursement manip" "cotisation"
  user_id: number;
  created_at: Date;
  value: number; // "100" ou "-100"
}

interface IOperation {
  amount: string;
  date: Date;
  operation: string;
}

interface IData {
  x: Date; // Date de check
  y: number; // Valeur de compte a l'instant x

  // la somme de tous les évenements SUM(value) pour un user_id ou created_at < x
}

export const Account = (props: PropsType) => {
  const { me } = useMyStore();

  return (
    <View style={styles.container}>
      {/*
      // @ts-ignore */}
      <SafeAreaView />
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sal's {me.bucque}!</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>{getAccountValue(fakeOperations, new Date())}€</Text>
      </View>
      <View style={styles.chartContainer}>
        <Svg {...{ width, height }}>
          <Defs>
            <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
              <Stop stopColor="#DAF5ED" offset="0%" />
              <Stop stopColor="#F5FCFF" offset="100%" />
            </LinearGradient>
          </Defs>
          <Path d={line} fill="transparent" stroke="#8AF285" strokeWidth={5} />
          <Path
            d={`${line} L ${width} ${height} L 0 ${height}`}
            fill="url(#gradient)"
          />
        </Svg>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {fakeOperations.map(operation => (
          <OperationLine
            operation={operation.description}
            date={operation.created_at.toString()}
            amount={operation.value.toString()}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "500"
  },
  welcomeContainer: {
    height: 50,
    marginLeft: 10,
    justifyContent: "center"
  },
  balanceContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  balanceText: {
    fontSize: 45,
    fontWeight: "600"
  },
  chartContainer: {
    height,
    width
  },
  scrollContainer: {
    marginTop: 15
  }
});
