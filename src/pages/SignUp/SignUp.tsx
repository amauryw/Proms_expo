import React from "react";
import { StyleSheet } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { SignUpForm } from "./SignUpForm";
import { SignUpFormType } from "./SignUp.type";
import { ReturnButton } from "../../components/returnButton/ReturnButton";
import { ScreenFitCard } from "../../components/ScreenFitCard";
import appStyle from "../../style/appStyle";
import { NavigationProp } from "@react-navigation/native";

type PropsType = {
  navigation: NavigationProp<any>;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: appStyle.color.primary,
    justifyContent: "center"
  }
});

export function SignUp(props: PropsType) {
  const goBack = () => {
    props.navigation.navigate("SignIn");
  };

  const onCreateAccountPress = (values: SignUpFormType) => {
    console.log(values);
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <ReturnButton onPress={goBack} />
      <ScreenFitCard>
        <SignUpForm onSubmit={onCreateAccountPress} />
      </ScreenFitCard>
    </SafeAreaView>
  );
}
