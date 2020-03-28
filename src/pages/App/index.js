import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import {
  defaultTopNavigationOptions,
  defaultBottomNavigationOptions
} from "../../style/defaultNavigationOptions";
import { profileNavigator } from "./Profile/Profile.navigator";
import { Newsfeed } from "./Newsfeed";
import { Account } from "./Account";
import { renderTabIcon } from "../../components/Icon";

const TabNavigator = createBottomTabNavigator(
  {
    account: {
      screen: Account,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabIcon("assignment", tintColor)
      }
    },
    newsfeed: {
      screen: Newsfeed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabIcon("alarm", tintColor)
      }
    },
    profile: {
      screen: profileNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => renderTabIcon("face", tintColor)
      }
    }
  },
  {
    initialRouteName: "account",
    tabBarOptions: {
      ...defaultBottomNavigationOptions
    }
  }
);

const CardNavigator = createStackNavigator(
  {
    main: {
      screen: TabNavigator
    }
  },
  {
    initialRouteName: "main",
    navigationOptions: {
      ...defaultTopNavigationOptions
    }
  }
);

const ModalNavigator = createStackNavigator(
  {
    main: {
      screen: CardNavigator
    }
  },
  {
    initialRouteName: "main",
    mode: "modal",
    navigationOptions: {
      header: null
    }
  }
);

export default ModalNavigator;
