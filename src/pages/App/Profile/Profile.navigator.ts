import React from "react";
import { createStackNavigator } from "react-navigation";
import { Profile } from "./Profile";
import { ProfileModif } from "./ProfileModif";

export const profileNavigator = createStackNavigator(
  {
    profile: {
      screen: Profile
    },
    profilemodif: {
      screen: ProfileModif
    }
  },
  {
    initialRouteName: "profile",
    navigationOptions: {
      header: null
    }
  }
);
