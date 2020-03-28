import React from "react";
import { Navigation } from "./src/Nav";
import { MyContextProvider } from "./src/modules/me";
import { StatusBar } from "react-native";

function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MyContextProvider>
        <Navigation />
      </MyContextProvider>
    </>
  );
}

export default App;
