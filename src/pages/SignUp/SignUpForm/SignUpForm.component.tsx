// @ts-nocheck
import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { compose } from "recompose";
import { Formik } from "formik";
import * as Yup from "yup";
import { Input } from "../../../components/Input";
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik";
import { SignUpFormType } from "../SignUp.type";

type PropsType = {
  onSubmit: (values: SignUpFormType) => void;
};

const MyInput = compose(
  handleTextInput,
  withNextInputAutoFocusInput
  // @ts-ignore fix myInput with compose
)(Input);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  user: Yup.string().required("please! user"),
  email: Yup.string()
    .required("please! email?")
    .email("well that's not an email"),
  password: Yup.string()
    .required()
    .min(3, "pretty sure this will be hacked"),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  )
});

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    marginTop: 30,
    marginHorizontal: 30
  },
  titleText: {
    color: "#000",
    fontSize: 30
  },
  buttonText: {
    color: "#80FFAA",
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center"
  }
});

export const SignUpForm = (props: PropsType) => (
  <Formik
    initialValues={{
      user: "",
      email: "",
      password: "",
      passwordConfirmation: ""
    }}
    onSubmit={values => props.onSubmit(values)}
    validationSchema={validationSchema}
    render={props => {
      return (
        <Form>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Créer un compte</Text>
            <View>
              <MyInput
                // @ts-ignore fix myInput with compose
                label="Nom d'utilisateur"
                name="user"
                type="user"
              />
            </View>
            <View>
              <MyInput
              // @ts-ignore fix myInput with compose
                label="Email"
                name="email"
                type="email"
              />
            </View>
            <View>
              <MyInput
                // @ts-ignore fix myInput with compose
                label="Mot de passe"
                name="password"
                type="password"
                secureTextEntry
              />
            </View>
            <View>
              <MyInput
                // @ts-ignore fix myInput with compose
                label="Confirmer le mot de passe"
                name="passwordConfirmation"
                type="passwordConfirmation"
                secureTextEntry
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={props.handleSubmit} title="SUBMIT">
                <Text style={styles.buttonText}>Valider</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Form>
      );
    }}
  />
);
