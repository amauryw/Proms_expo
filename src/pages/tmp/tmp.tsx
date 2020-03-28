import React from "react";
import { StyleSheet, Text, Button } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import appStyle from "../../style/appStyle";
import { useMyStore } from "../../modules/me";

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: appStyle.color.primary,
    justifyContent: "center"
  }
});

export function Tmp() {
  const { logout } = useMyStore();

  return (
    <SafeAreaView style={styles.areaView}>
      <Text>LOGGED IN</Text>
      <Button title="logout" onPress={() => logout()}/>
    </SafeAreaView>
  );
}
