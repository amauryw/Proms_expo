import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Account } from "../Account";
import { Newsfeed } from "../Newsfeed";
import { renderTabIcon } from "../../components/Icon";
import appStyle from "../../style/appStyle";

const Tab = createBottomTabNavigator();

navigationOptions: {
}

export function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          backgroundColor: appStyle.color.primary,
          alignItems: "center"
        },
        inactiveTintColor: appStyle.color.secondary,
        activeTintColor: "black",
        labelStyle: {
          fontSize: 11
        }
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          let iconName = "assignment";
          if (route.name === "account") {
            iconName = "assignment";
          }
          return renderTabIcon(iconName, color);
        }
      })}
    >
      <Tab.Screen name="account" component={Account} />
      <Tab.Screen name="newsfeed" component={Newsfeed} />
    </Tab.Navigator>
  );
}
