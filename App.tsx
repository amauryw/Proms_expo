import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "./src/pages/SignIn";

const Stack = createStackNavigator();

function App() {
  const isUserLoggedIn = false;
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {isUserLoggedIn ? (
          <></>
        ) : (
          <Stack.Screen name="SignIn" component={SignIn} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
