import React, { Component } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { UserFieldModif } from "./components/userFieldModif/userFieldModif.component";

type PropsType = {
  navigation: NavigationType;
};

const ChampList = [
  { title: "Bucque", value: "Abc" },
  { title: "Nums", value: "000" },
  { title: "Email", value: "abc@xyz" },
  { title: "Adresse", value: "Tabagns" }
];
export const ProfileModif = (props: PropsType) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headTitle}>NOM Prénom</Text>
      </View>
      <View style={styles.validateContainer}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("profile");
          }}
        >
          <Text style={styles.cancelButtonText}>Annuler</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate("profile");
          }}
        >
          <Text style={styles.validateButtonText}>OK</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
          {ChampList.map(item => {
            return <UserFieldModif title={item.title} value={item.value} />;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  headContainer: {
    height: 80,
    backgroundColor: "#EBEDF0",
    justifyContent: "center"
  },
  headTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 10
  },
  profileContainer: {
    flex: 4,
    marginHorizontal: 10,
  },
  profileTitle: {
    fontSize: 20,
    color: "#D1E3DE"
  },
  profileText: {
    fontSize: 25
  },
  validateContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  cancelButtonText: {
    color: "red",
    fontSize: 15
  },
  validateButtonText: {
    color: "#59FFAF",
    fontSize: 15
  }
});
