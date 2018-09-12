import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import Routes from "Routes";
import play from "utilities/playSound";

export default createMaterialBottomTabNavigator(Routes, {
  navigationOptions: {
    tabBarOnPress: ({ defaultHandler }) => {
      play("tab");
      defaultHandler();
    }
  }
});
