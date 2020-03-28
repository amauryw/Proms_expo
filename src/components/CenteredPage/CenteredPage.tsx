import * as React from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PropsType = {};

class CenteredPage extends React.Component<PropsType> {
  render() {
    return (
      <SafeAreaView>
        <View style={styles.centerEverything} {...this.props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  centerEverything: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CenteredPage;
