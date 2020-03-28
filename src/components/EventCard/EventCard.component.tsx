import React from "react";
import { View, StyleSheet, Text } from "react-native";
import appStyle from "../../style/appStyle";

const CARD_HEIGHT = 100;
type PropsType = {
  event: {
    id: string;
    title: string;
    month: string;
    day: number;
    location: string;
    subscriptions: number;
    description: string;
  };
};

export class EventCard extends React.Component<PropsType> {
  renderAvailablePeople = (number: number) => {
    return <Text style={{ color: "white" }}> {number} pers</Text>;
  };
  render() {
    const { month, day, description } = this.props.event;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.dateContainer}>
          <View style={styles.monthContainer}>
            <Text style={styles.monthText}>{month}</Text>
          </View>
          <View style={styles.dayContainer}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        </View>
        <View style={styles.eventContainer}>
          <Text style={styles.descriptionText}>{description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: appStyle.color.secondary,
    height: CARD_HEIGHT,
    borderRadius: 5,
    flexDirection: 'row',
    flex: 1,
    marginVertical: 5,
    marginHorizontal: 5
  },
  eventContainer: {
    flex: 4,
    flexDirection: "row",
    marginVertical: 5,
    marginHorizontal: 5
  },
  dateContainer: {
    width: 55,
    backgroundColor: appStyle.color.primary,
    borderRadius: 5,
    marginVertical: 5,
    marginHorizontal: 5
  },
  monthContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  monthText: {
    fontSize: 11,
    fontWeight: "500",
    color: "white"
  },
  dayContainer: { 
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  dayText: {
    fontSize: 30,
    fontWeight: "700",
    color: "white"
  },
  descriptionText: {
    fontSize: 15,
    fontWeight: "bold"
  }
});
