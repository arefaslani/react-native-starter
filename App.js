import React from "react";
import { Provider } from "react-redux";
import Expo from "expo";

import store from "store/store";

import BottomTabBar from "components/BottomTabBar"; // eslint-disable-line

Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

export default () => (
  <Provider store={store}>
    <BottomTabBar />
  </Provider>
);
