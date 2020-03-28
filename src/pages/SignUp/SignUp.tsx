import React, { Component } from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SignUpForm } from "./SignUpForm";
import { SignUpFormType } from "./SignUp.type.ts";
import { ReturnButton } from "../../components/returnButton/ReturnButton";
import { ScreenFitCard } from "../../components/ScreenFitCard";
import appStyle from "../../style/appStyle";

type PropsType = {
  navigation: NavigationType;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: appStyle.color.primary,
    justifyContent: 'center'
  }
});
export class SignUp extends Component<PropsType> {
  goBack = () => {
    this.props.navigation.navigate("signIn");
  };

  onCreateAccountPress = (values: SignUpFormType) => {
    console.log(values);
  };

  render() {
    return (
      <SafeAreaView style={styles.areaView}>
        <ReturnButton onPress={this.goBack} />
        <ScreenFitCard>
          <SignUpForm onSubmit={this.onCreateAccountPress} />
        </ScreenFitCard>
      </SafeAreaView>
    );
  }
}

export default SignUp;
