import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { Font, ScreenOrientation } from "expo";

import store from "store/store";
import BottomTabBar from "components/BottomTabBar"; // eslint-disable-line
import iranyekanLight from "assets/fonts/iranyekan-light.ttf";
import iranyekanBold from "assets/fonts/iranyekan-bold.ttf";

ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);

export default class extends Component {
  state = { fontLoaded: false };

  async componentWillMount() {
    await Font.loadAsync({
      "iranyekan-light": iranyekanLight,
      "iranyekan-bold": iranyekanBold
    });

    this.setState({ fontLoaded: true });
  }

  render() {
    const { fontLoaded } = this.state;
    return (
      <Provider store={store}>
        {fontLoaded ? <BottomTabBar /> : <View />}
      </Provider>
    );
  }
}
