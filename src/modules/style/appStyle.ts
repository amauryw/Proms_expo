import { isIphoneX } from "react-native-iphone-x-helper";

const color = {
  green: "#80FFAA",
  white: "rgb(255,255,255)",
  red: "rgb(210,20,20)",
  black: "rgb(20,20,20)"
};

const appStyle = {
  unit: 5,
  color: {
    primary: color.green,
    secondary: color.white,
    error: color.red,
    black: color.black
  },
  margins: {
    statusBar: isIphoneX() ? 34 : 15,
    small: 10,
    tiny: 5
  },
  borderRadius: {
    large: 12
  },
  height: {
    cards: 80
  },
  font: {
    size: {
      itemTitle: 16,
      description: 10,
      eventDate: 25,
      eventDescription: 20
    }
  },
  header: {
    iconSize: 25,
    containerSize: 50
  }
};

export default appStyle;
