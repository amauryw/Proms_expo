import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Account } from "../Account";
import { Newsfeed } from "../Newsfeed";
import { ProfileNavigator } from "../Profile";
import { renderTabIcon } from "../../components/Icon";
import appStyle from "../../style/appStyle";
import { AppLoading } from "../AppLoading";
import isNil from "lodash/isNil";
import { useMyStore } from "../../modules/me";

const Tab = createBottomTabNavigator();

navigationOptions: {
}

export function Tabs() {
  const { me } = useMyStore();
  if (isNil(me)) return <AppLoading />;
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
          else if (route.name === "newsfeed"){
            iconName = "alarm";
          }
          else if (route.name === 'profile'){
            iconName = "face";
          }
          return renderTabIcon(iconName, color);
        }
      })}
    >
      <Tab.Screen name="account" component={Account} />
      <Tab.Screen name="newsfeed" component={Newsfeed} />
      <Tab.Screen name="profile" component={ProfileNavigator} />
    </Tab.Navigator>
  );
}
