import { createBottomTabNavigator } from "react-navigation";

import play from "utilities/playSound";
import Routes from "Routes";

export default createBottomTabNavigator(Routes, {
  navigationOptions: {
    tabBarOnPress: ({ defaultHandler }) => {
      play("tab");
      defaultHandler();
    }
  }
});
