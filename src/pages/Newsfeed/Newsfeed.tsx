// @flow
import React from "react";
import { ScrollView } from "react-native";
import { getEvents } from "../../modules/api";
import { EventCard } from "../../components/EventCard";

export function Newsfeed() {
  const events = getEvents();
  return (
    <ScrollView>
      {events.map(elem => (
        // @ts-ignore
        <EventCard key={`${elem.id}`} event={elem} />
      ))}
    </ScrollView>
  );
}
