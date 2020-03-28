import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { UserField } from "./components/userField";
import { NavigationProp } from "@react-navigation/native";
import { useMyStore } from "../../modules/me";

const ChampList = [
  { title: "Nums", apiValue: "nums" },
  { title: "Email", apiValue: "email" },
  { title: "Adresse", apiValue: "lieu" }
];

type PropsType = {
  navigation: NavigationProp<any>;
};

export function Profile(props: PropsType) {
  const { me, logout } = useMyStore();

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headTitle}>
          {me.nom} {me.prenom}
        </Text>
      </View>
      <View style={styles.profileContainer}>
        <View style={styles.userContainer_1}>
          <View style={styles.bucqueContainer}>
            <UserField title="Bucque" value={me.bucque} />
          </View>
          <View style={styles.modifContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("profilemodif");
              }}
            >
              <Text style={styles.modifButtonText}>Modifier</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.userContainer_2}>
          {ChampList.map(item => {
            return <UserField title={item.title} value={me[item.apiValue]} />;
          })}
        </View>
      </View>
      <View style={styles.logoutContainer}>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
          style={styles.logoutButton}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 18 }}>
            Se déconnecter
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

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
    marginVertical: 15,
    marginHorizontal: 10
  },
  profileTitle: {
    fontSize: 20,
    color: "#D1E3DE"
  },
  userContainer_1: {
    flex: 1,
    flexDirection: "row"
  },
  bucqueContainer: {
    flex: 4
  },

  profileText: {
    fontSize: 25
  },
  userContainer_2: {
    flex: 3
  },
  modifContainer: {
    marginVertical: 5,
    flex: 1
  },
  modifButtonText: {
    color: "#59FFAF",
    fontSize: 15
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center"
  },
  logoutButton: {
    width: 170,
    height: 55,
    backgroundColor: "#80FFAA",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  }
});
