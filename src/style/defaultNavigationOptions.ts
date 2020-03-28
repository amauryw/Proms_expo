
import appStyle from "../style/appStyle";

export const defaultTopNavigationOptions = {
  headerMode: "none",
  headerStyle: {
    height: appStyle.margins.statusBar,
    backgroundColor: appStyle.color.primary
  }
};

export const defaultBottomNavigationOptions = {
  style: {
    backgroundColor: appStyle.color.primary,
    alignItems: "center"
  },
  inactiveTintColor: appStyle.color.secondary,
  activeTintColor: "black",
  labelStyle: {
    fontSize: 11
  }
};
