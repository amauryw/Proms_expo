import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Profile } from "./Profile";
import { ProfileModif } from "./ProfileModif";

const Stack = createStackNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="profilemodif" component={ProfileModif} />
    </Stack.Navigator>
  );
}
