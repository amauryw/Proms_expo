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
import { Tmp } from "./pages/tmp";

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
          <Stack.Screen name="account" component={Tmp} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
