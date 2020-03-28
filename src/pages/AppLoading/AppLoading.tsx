import React from "react";
import { ActivityIndicator, StatusBar, Text } from "react-native";
import CenteredPage from "../../components/CenteredPage/CenteredPage";

export function AppLoading() {
  return (
    <CenteredPage>
      <ActivityIndicator />
      <Text>Chargement des données stockées dans le mobile</Text>
      <StatusBar barStyle="default" />
    </CenteredPage>
  );
}
