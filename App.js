import React from "react";
import { Provider } from "react-redux";

import store from "store/store";

import BottomTabBar from "components/BottomTabBar"; // eslint-disable-line

export default () => (
  <Provider store={store}>
    <BottomTabBar />
  </Provider>
);
