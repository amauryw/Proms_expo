import React from "react";
import { RootToaster } from "react-native-root-toaster";
import { Navigation } from "./src/Nav";
import { MyContextProvider } from "./src/modules/me";
import { StatusBar } from "react-native";

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <RootToaster defaultMessage="Sal's" defaultColor="red" />
      <MyContextProvider>
        <Navigation />
      </MyContextProvider>
    </>
  );
}

export default App;
