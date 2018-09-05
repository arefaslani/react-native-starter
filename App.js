import React from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

import FeedPage from './pages/Feed'
import SettingsPage from './pages/Settings'

export default createBottomTabNavigator({
  Feed: FeedPage,
  Settings: SettingsPage
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      switch (routeName) {
        case 'Feed':
          return <Icon name="home" size={25} color={tintColor} />;
          break;
        case 'Settings':
          return <Icon name="rocket" size={25} color={tintColor} />;
          break;
        default:
          break;
      }
    }
  })
});
