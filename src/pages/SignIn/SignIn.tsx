import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import { NavigationProp } from "@react-navigation/native";
import SafeAreaView from "react-native-safe-area-view";
import { toaster } from "../../lib/toaster";
import { Input } from "../../components/Input";
import { ScreenFitCard } from "../../components/ScreenFitCard";
import { useMyStore } from "../../modules/me/index";

import appStyle from "../../style/appStyle";

type PropsType = {
  navigation: NavigationProp<any>;
};

const styles = StyleSheet.create({
  areaView: {
    flex: 1,
    backgroundColor: appStyle.color.primary,
    justifyContent: "center"
  },
  titleContainer: {
    marginTop: 30,
    marginHorizontal: 30
  },
  titleText: {
    color: "#000",
    fontSize: 30
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: appStyle.color.primary,
    borderRadius: 5
  },
  textContainer: {
    marginTop: 20,
    alignItems: "center"
  },
  textStyle: {
    fontSize: 15
  },
  buttonContainer2: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    backgroundColor: appStyle.color.primary,
    borderRadius: 5
  }
});

export function SignIn(props: PropsType) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useMyStore();

  const tryLogin = async () => {
    try {
      await login(name, password);
    } catch (error) {
      toaster("Le login a échoué");
    }
  };

  const signUp = () => {
    props.navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.areaView}>
      <ScreenFitCard>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Hello!</Text>
          <View>
            <Input
              onChangeText={setName}
              value={name}
              label="Nom d'utilisateur"
            />
          </View>
          <View>
            <Input
              onChangeText={setPassword}
              value={password}
              label="Mot de passe"
              secureTextEntry
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={tryLogin} disabled={isLoading}>
              {!isLoading ? (
                <Text style={styles.buttonText}>Se connecter</Text>
              ) : (
                <ActivityIndicator />
              )}
            </TouchableOpacity>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textStyle}>OU</Text>
          </View>
          <TouchableOpacity style={styles.buttonContainer2} onPress={signUp}>
            <Text style={styles.buttonText}>Créer un compte</Text>
          </TouchableOpacity>
        </View>
      </ScreenFitCard>
    </SafeAreaView>
  );
}
