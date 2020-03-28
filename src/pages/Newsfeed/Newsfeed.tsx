import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEvents } from "../../modules/api";
import { EventCard } from "../../components/EventCard";

export function Newsfeed() {
  const events = getEvents();
  return (
    <View style = {styles.mainContainer}>
      {/* 
      // @ts-ignore */}
      <SafeAreaView />
      <View style = {styles.headContainer}>
        <Text style={styles.headText}>Prochainement</Text>
      </View>
      <ScrollView>
        {events.map(elem => (
          // @ts-ignore
          <EventCard key={`${elem.id}`} event={elem} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer : {
    flex : 1
  },
  headContainer :{
    marginHorizontal : 10,
    marginBottom : 20,
    justifyContent : "center"
  },
  headText : {
    fontSize : 30,
    fontWeight : "bold"
  }
})
