import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    height: height / 2,
    marginBottom: 10
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const Post = props => {
  const { imageId, author } = props;
  return (
    <View>
      <Image
        source={{ uri: `https://picsum.photos/200/300?${imageId}` }}
        style={styles.image}
      />
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

Post.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  imageId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};

export default Post;
