import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import FeedPage from './pages/Feed'
import SettingsPage from './pages/Settings'

export default createBottomTabNavigator({
  Feed: FeedPage,
  Settings: SettingsPage
});
