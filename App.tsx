import React from "react";
import { Navigation } from "./src/Nav";
import { MyContextProvider } from "./src/modules/me";

function App() {
  return (
    <MyContextProvider>
      <Navigation />
    </MyContextProvider>
  );
}

export default App;
