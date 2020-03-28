import React, { createContext, useState } from "react";

export const MyContext = createContext([{}, () => {}]);

const initialState = {
  me: null,
  isLoading: false,
  hasErrored: false
};

export const MyContextProvider = props => {
  const [state, setState] = useState(initialState);
  return (
    <MyContext.Provider value={[state, setState]}>
      {props.children}
    </MyContext.Provider>
  );
};
