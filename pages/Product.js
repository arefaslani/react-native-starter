import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

const Product = props => {
  const { author, imageHeight, imageWidth, imageURI } = props;
  console.log(props);
  return (
    <View style={{ paddingTop: 10 }}>
      <Image
        source={{ uri: imageURI }}
        style={styles.image}
        width={imageWidth - 20}
        height={imageHeight}
      />
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

Product.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired,
  author: PropTypes.string.isRequired,
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  imageURI: PropTypes.string.isRequired
};

export default Product;
