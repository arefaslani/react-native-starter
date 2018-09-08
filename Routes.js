import React from "react";
import PropTypes from "prop-types";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

import FeedPage from "pages/Feed";
import PostPage from "pages/Post";
import SettingsPage from "pages/Settings";
import tabChangeSound from "assets/sounds/tab.m4a";
/* eslint-disable no-undef */
const soundObject = new Expo.Audio.Sound();
/* eslint-enable no-undef */

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedPage,
    navigationOptions: {
      title: "خانه"
    }
  },
  Post: {
    screen: PostPage,
    navigationOptions: {
      title: "پست"
    }
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: "تنظیمات"
    }
  }
});

const HomeTabIcon = ({ tintColor }) => (
  <Icon name="home" size={25} color={tintColor} />
);
const SettingsTabIcon = ({ tintColor }) => (
  <Icon name="sliders" size={25} color={tintColor} />
);

const Routes = createBottomTabNavigator(
  {
    Feed: {
      screen: FeedStack,
      navigationOptions: {
        title: "خانه",
        tabBarIcon: HomeTabIcon
      }
    },
    Settings: {
      screen: SettingsStack,
      navigationOptions: {
        title: "تنظیمات",
        tabBarIcon: SettingsTabIcon
      }
    }
  },
  {
    navigationOptions: {
      tabBarOnPress: async ({ defaultHandler }) => {
        try {
          await soundObject.loadAsync(tabChangeSound);
        } catch (error) {
          // do nothing
        }
        await soundObject.replayAsync();
        defaultHandler();
      }
    }
  }
);

HomeTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
SettingsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default Routes;
