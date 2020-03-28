//@flow
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StatusBar, Text } from "react-native";
import { getItem } from "../lib/asyncStorage";

import CenteredPage from "components/CenteredPage";
import { useMyStore } from "../modules/me/me.hooks";

type PropsType = {
  navigation: NavigationType;
};

export const AuthLoadingScreen = (props: PropsType) => {
  const { setMe } = useMyStore();

  // get async storage on app launch
  useEffect(() => {
    const getSavedUser = async () => {
      const savedMe = await getItem("user", "object");
      await setMe(savedMe);
      savedMe
        ? props.navigation.navigate("app")
        : props.navigation.navigate("signIn");
    };
    getSavedUser();
  }, []);

  return (
    <CenteredPage>
      <ActivityIndicator />
      <Text>Chargement des données stockées dans le mobile</Text>
      <StatusBar barStyle="default" />
    </CenteredPage>
  );
};
