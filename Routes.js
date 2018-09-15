import React, { Component } from "react";
import { Text } from "react-native";
import PropTypes from "prop-types";
import { createStackNavigator } from "react-navigation";
import Icon from "@expo/vector-icons/FontAwesome";

import HomePage from "pages/Home";
import SettingsPage from "pages/Settings";
import CategoriesPage from "pages/Categories";
import CategoryPage from "pages/Category";
import ProductPage from "pages/Product";
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

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: mapNavigationStateParamsToProps(HomePage),
      navigationOptions: {
        title: "خانه"
      }
    },
    Product: {
      screen: mapNavigationStateParamsToProps(ProductPage),
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.author
      })
    }
  },
  {
    navigationOptions: {
      headerRight: <ShoppingCartButton />,
      headerTitleStyle: {
        fontFamily: "iranyekan-bold",
        fontWeight: "200"
      }
    }
  }
);

const SettingsStack = createStackNavigator(
  {
    Settings: {
      screen: mapNavigationStateParamsToProps(SettingsPage),
      navigationOptions: {
        title: "تنظیمات"
      }
    }
  },
  {
    navigationOptions: {
      headerRight: <ShoppingCartButton />,
      headerTitleStyle: {
        fontFamily: "iranyekan-bold",
        fontWeight: "200"
      }
    }
  }
);

const CategoriesStack = createStackNavigator(
  {
    Categories: {
      screen: mapNavigationStateParamsToProps(CategoriesPage),
      navigationOptions: {
        title: "دسته بندی"
      }
    },
    Category: {
      screen: mapNavigationStateParamsToProps(CategoryPage),
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.name
      })
    },
    Product: {
      screen: mapNavigationStateParamsToProps(ProductPage),
      navigationOptions: ({ navigation }) => ({
        title: navigation.state.params.author
      })
    }
  },
  {
    navigationOptions: {
      headerRight: <ShoppingCartButton />,
      headerTitleStyle: {
        fontFamily: "iranyekan-bold",
        fontWeight: "200"
      }
    }
  }
);

const HomeTabIcon = ({ tintColor }) => (
  <Icon name="home" size={25} color={tintColor} />
);
const SettingsTabIcon = ({ tintColor }) => (
  <Icon name="sliders" size={25} color={tintColor} />
);
const CategoriesTabIcon = ({ tintColor }) => (
  <Icon name="list" size={25} color={tintColor} />
);

HomeTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
SettingsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};
CategoriesTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired
};

export default {
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{ fontFamily: "iranyekan-bold", fontSize: 10 }}>خانه</Text>
      ),
      tabBarIcon: HomeTabIcon
    }
  },
  Categories: {
    screen: CategoriesStack,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{ fontFamily: "iranyekan-bold", fontSize: 10 }}>
          دسته بندی
        </Text>
      ),
      tabBarIcon: CategoriesTabIcon
    }
  },
  Settings: {
    screen: SettingsStack,
    navigationOptions: {
      tabBarLabel: (
        <Text style={{ fontFamily: "iranyekan-bold", fontSize: 10 }}>
          تنظیمات
        </Text>
      ),
      tabBarIcon: SettingsTabIcon
    }
  }
};
