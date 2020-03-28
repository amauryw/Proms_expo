import React from "react";
import { TextField } from "react-native-material-textfield";
import appStyle from "../../style/appStyle";

type PropsType = {
  label: string;
  onChangeText: any;
  value: string;
  secureTextEntry?: boolean;
};

export const Input = (props: PropsType) => {
  return (
    <TextField
      {...props}
      label={props.label || ""}
      autoCapitalize="none"
      errorColor={appStyle.color.error}
      textColor={appStyle.color.primary}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};
