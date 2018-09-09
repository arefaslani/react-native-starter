import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    marginBottom: 10
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default class Card extends Component {
  state = { imageHeight: height / 2 };

  componentWillMount() {
    const { imageId } = this.props;
    const uri = this.imageURI(imageId);
    Image.getSize(uri, (w, h) => {
      const ratio = width / w;
      this.setState({ imageHeight: h * ratio });
    });
  }

  navigateHandler = () => {
    const { navigation, imageId } = this.props;
    const { imageHeight } = this.state;
    navigation.navigate("Post", {
      imageHeight,
      imageWidth: width,
      imageURI: this.imageURI(imageId),
      ...this.props
    });
  };

  imageURI = imageId => `https://picsum.photos/300?image=${imageId}`;

  render() {
    const { imageId, author } = this.props;
    const { imageHeight } = this.state;
    return (
      <TouchableOpacity onPress={this.navigateHandler}>
        <View>
          <Image
            source={{ uri: this.imageURI(imageId) }}
            style={styles.image}
            height={imageHeight}
          />
          <Text style={styles.author}>{author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  imageId: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};
