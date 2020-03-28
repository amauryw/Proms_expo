import React, { createContext, useState, ElementType, ReactNode } from "react";
import { UserType } from "./me.type";

export interface IMyStore {
  me: null | UserType;
  isLoading: boolean;
  hasErrored: boolean;
};
const initialState: IMyStore = {
  me: null,
  isLoading: false,
  hasErrored: false
};

export const MyContext = createContext<{
  state: IMyStore;
  setState: any;
}>({
  state: initialState,
  setState: () => {}
});

export function MyContextProvider({ children }: { children?: ReactNode }) {
  const [state, setState] = useState(initialState);
  const value = { state, setState };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}
