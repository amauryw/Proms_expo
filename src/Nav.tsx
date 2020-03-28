import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getItem } from "./lib/asyncStorage";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import isNil from "lodash/isNil";
import { useMyStore } from "./modules/me/me.hooks";
import { UserType } from "./modules/me/me.type";
import { AppLoading } from "./pages/AppLoading";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Tabs } from "./pages/Tabs";

const Stack = createStackNavigator();

export function Navigation() {
  const { me, setMe } = useMyStore();
  const [isAsyncAuthDone, setIsAsyncAuthDone] = useState(false);

  const fetchSavedUser = async () => {
    const savedMe = await getItem<UserType>("user", "object");
    await setMe(savedMe);
    setIsAsyncAuthDone(true);
  };
  useEffect(() => {
    fetchSavedUser();
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          {!isAsyncAuthDone ? (
            <Stack.Screen name="apploading" component={AppLoading} />
          ) : isNil(me) ? (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  title: "Sign in",
                  animationTypeForReplace: "pop"
                }}
              />
              <Stack.Screen name="SignUp" component={SignUp} />
            </>
          ) : (
            <Stack.Screen name="tab" component={Tabs} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
