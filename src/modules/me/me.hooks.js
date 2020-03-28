import { useContext } from "react";
import { setItem } from "../../lib/asyncStorage";
import { postLogin } from "./me.api";
import { MyContext } from "./me.context";

export const useMyStore = () => {
  const [state, setState] = useContext(MyContext);

  const me = state.me;
  const isLoading = state.isLoading;
  const hasErrored = state.hasErrored;

  const setMe = async newMe => {
    await setItem("user", newMe);
    setState(oldState => ({ ...oldState, me: newMe }));
  };

  const setLoading = value => {
    setState(oldState => ({ ...oldState, isLoading: value }));
  };

  const setHasErrored = value => {
    setState(oldState => ({ ...oldState, hasErrored: value }));
  };

  const login = async (name, password) => {
    try {
      setLoading(true);
      setHasErrored(false);
      const newMe = await postLogin(name);
      await setMe(newMe);
    } catch (error) {
      setHasErrored(true);
      console.log("Error during login", { error });
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await setMe(null);
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
