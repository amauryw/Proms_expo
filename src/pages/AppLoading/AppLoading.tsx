import React from "react";
import { ActivityIndicator, StatusBar, Text } from "react-native";
import CenteredPage from "../../components/CenteredPage/CenteredPage";

export function AppLoading() {
  return (
    <CenteredPage>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </CenteredPage>
  );
}
