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

const FeedStack = createStackNavigator({
  Feed: {
    screen: FeedPage,
    navigationOptions: {
      title: "Home"
    }
  },
  Post: {
    screen: PostPage,
    navigationOptions: ({ navigation }) => ({
      title: navigation.state.params.author
    })
  }
});

const SettingsStack = createStackNavigator({
  Settings: {
    screen: SettingsPage,
    navigationOptions: {
      title: "Settings"
    }
  }
});

const HomeTabIcon = ({ tintColor }) => (
  <Icon name="home" size={25} color={tintColor} />
);
const SettingsTabIcon = ({ tintColor }) => (
  <Icon name="sliders" size={25} color={tintColor} />
);

const Routes = createBottomTabNavigator({
  Feed: {
    screen: FeedStack,
    navigationOptions: {
      title: "Home",
      tabBarIcon: HomeTabIcon
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      title: "Settings",
      tabBarIcon: SettingsTabIcon
    }
  }
});

HomeTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
SettingsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default Routes;
