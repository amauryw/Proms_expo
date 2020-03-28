import { useContext } from "react";
import { setItem, removeItem } from "../../lib/asyncStorage";
import { postLogin } from "./me.api";
import { MyContext } from "./me.context";
import { UserType } from "./me.type";

export const useMyStore = () => {
  const { state, setState } = useContext(MyContext);

  const me = state.me;
  const isLoading = state.isLoading;
  const hasErrored = state.hasErrored;

  const setMe = async (newMe: UserType | null) => {
    setState(oldState => ({ ...oldState, me: newMe }));
  };

  const setLoading = (value: boolean) => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setHasErrored = (value: boolean) => {
    setState(oldState => ({ ...oldState, hasErrored: value }));
  };

  const login = async (name: string, password: string): Promise<void> => {
    try {
      setLoading(true);
      setHasErrored(false);
      const newMe = await postLogin(name);
      await setMe(newMe);
      await setItem("user", newMe);
    } catch (error) {
      setHasErrored(true);
      console.log("Error during login", { error });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    await setMe(null);
    await removeItem("user");
  };

  return {
    me,
    setMe,
    login,
    logout,
    isLoading,
    hasErrored
  };
};
