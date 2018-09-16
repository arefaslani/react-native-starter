import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";

import Button from "components/Button";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    height,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  }
});

const Profile = () => (
  <View style={styles.container}>
    <Text style={{ fontFamily: "iranyekan-light", marginBottom: 10 }}>
      برای مشاهده پروفایل باید وارد اکانت خود شوید
    </Text>
    <Button
      title="ورود"
      textStyle={{
        fontFamily: "iranyekan-light",
        fontWeight: "200",
        paddingTop: 4,
        width: width / 2
      }}
      onPress={() => console.log("Login button pressed")}
    />
  </View>
);

export default Profile;
