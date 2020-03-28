import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getEvents } from "../../modules/api";
import { EventCard } from "../../components/EventCard";

export function Newsfeed() {
  const events = getEvents();
  return (
    <SafeAreaView>
      <ScrollView>
        {events.map(elem => (
          // @ts-ignore
          <EventCard key={`${elem.id}`} event={elem} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
