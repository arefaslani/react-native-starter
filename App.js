import React from "react";
import { createBottomTabNavigator } from "react-navigation";

import FeedPage from './pages/Feed'

export default createBottomTabNavigator({
  Feed: FeedPage
});
