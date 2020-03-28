import React from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMyStore } from "../../modules/me/me.hooks";
import { OperationLine } from "../../components/OperationLine/OperationLine";
import { Svg, Path, LinearGradient, Defs, Stop } from "react-native-svg";
import * as shape from "d3-shape";
import { scaleTime, scaleLinear } from "d3-scale";

type PropsType = {};

const d3 = {
  shape
};

const { width } = Dimensions.get("window");
const height = 140;
const verticalPadding = 5;

const data = [
  { x: new Date(2019, 9, 1), y: 0 },
  { x: new Date(2019, 9, 16), y: 0 },
  { x: new Date(2019, 9, 17), y: 200 },
  { x: new Date(2019, 10, 1), y: 200 },
  { x: new Date(2019, 10, 2), y: 300 },
  { x: new Date(2019, 10, 4), y: 300 }
];

const scaleX = scaleTime()
  .domain([new Date(2019, 9, 1), new Date(2019, 10, 4)])
  .range([0, width]);
const scaleY = scaleLinear()
  .domain([0, 300])
  .range([height - verticalPadding, verticalPadding]);
const line = d3.shape
  .line()
  // @ts-ignore
  .x(d => scaleX(d.x))
  // @ts-ignore
  .y(d => scaleY(d.y))
  // @ts-ignore
  .curve(d3.shape.curveBasis)(data);

export const Account = (props: PropsType) => {
  const { me } = useMyStore();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.welcomeContainer}>
        <Text style={styles.welcomeText}>Sal's {me.bucque}!</Text>
      </View>
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceText}>{me.solde}€</Text>
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
        <OperationLine
          operation="Wix de proms"
          date="28 septembre 2019"
          amount="-100€"
        />
        <OperationLine
          operation="Top-up by Lydia"
          date="10 août 2019"
          amount="+80€"
        />
        <OperationLine
          operation="Cotiz 2018-2019"
          date="1er Juin 2019"
          amount="-90€"
        />
        <OperationLine
          operation="Fignoss 2018"
          date="23 Novembre 2018"
          amount="-122,5€"
        />
      </ScrollView>
    </SafeAreaView>
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
