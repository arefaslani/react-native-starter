import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

import FeedPage from 'pages/Feed'
import PostPage from 'pages/Post'
import SettingsPage from 'pages/Settings'

const soundObject = new Expo.Audio.Sound();

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedPage,
    navigationOptions: {
      title: 'خانه'
    }
  },
  Post: {
    screen: PostPage,
    navigationOptions: {
      title: 'پست'
    }
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: 'تنظیمات'
    }
  }
});

export default createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      title: "خانه",
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="home" size={25} color={tintColor} />;
      }
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      title: "تنظیمات",
      tabBarIcon: ({ focused, tintColor }) => {
        return <Icon name="sliders" size={25} color={tintColor} />;
      }
    }
  }
},
{
  navigationOptions: {
    tabBarOnPress: async ({ navigation, defaultHandler }) => {
      try {
        await soundObject.loadAsync(require("assets/sounds/tab.m4a"));
      } catch (error) {
        // do nothing
      }
      await soundObject.replayAsync();
      defaultHandler()
    }
  }
});
