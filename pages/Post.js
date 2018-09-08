import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    marginBottom: 10
  },
  caption: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const Post = props => {
  const { navigation } = props;
  const { image, caption } = navigation.state.params;
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

Post.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired
};

export default Post;
