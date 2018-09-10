import React, { Component } from "react";
import PropTypes from "prop-types";
import { createStackNavigator } from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

import FeedPage from "pages/Feed";
import PostPage from "pages/Post";
import SettingsPage from "pages/Settings";
import ShoppingCartButton from "components/ShoppingCartButton";

const mapNavigationStateParamsToProps = SomeComponent =>
  class extends Component {
    static navigationOptions = SomeComponent.navigationOptions;

    render() {
      const {
        navigation: {
          state: { params }
        }
      } = this.props;
      return <SomeComponent {...params} {...this.props} />;
    }
  };

const FeedStack = createStackNavigator(
  {
    Feed: {
      screen: mapNavigationStateParamsToProps(FeedPage),
      navigationOptions: {
        title: "Home"
      }
    },
    Post: {
      screen: mapNavigationStateParamsToProps(PostPage),
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.author
      })
    }
  },
  {
    navigationOptions: {
      headerRight: <ShoppingCartButton />
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: mapNavigationStateParamsToProps(SettingsPage),
      navigationOptions: {
        title: "Settings"
      }
    }
  },
  {
    navigationOptions: {
      headerRight: <ShoppingCartButton />
    }
  }
);

const HomeTabIcon = ({ tintColor }) => (
  <Icon name="home" size={25} color={tintColor} />
);
const SettingsTabIcon = ({ tintColor }) => (
  <Icon name="sliders" size={25} color={tintColor} />
);

HomeTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
SettingsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default {
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
};
