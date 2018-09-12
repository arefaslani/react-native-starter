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
import Icon from "@expo/vector-icons/FontAwesome";

import play from "utilities/playSound";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10
  },
  image: {
    width: width - 20
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default class Card extends Component {
  state = { imageHeight: height / 2, liked: false };

  componentWillMount() {
    const { id } = this.props;
    const uri = this.imageURI(id);
    Image.getSize(uri, (w, h) => {
      const ratio = width / w;
      this.setState({ imageHeight: h * ratio });
    });
  }

  navigateHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("Product", { ...this.props });
  };

  toggleLikeButton = () => {
    const { liked } = this.state;
    if (liked) {
      play("dislike");
    } else {
      play("like");
    }
    this.setState({ liked: !liked });
  };

  imageURI = id => `https://picsum.photos/300?image=${id}`;

  render() {
    const { id, author } = this.props;
    const { imageHeight, liked } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.navigateHandler} activeOpacity={0.7}>
          <Image
            source={{ uri: this.imageURI(id) }}
            style={styles.image}
            height={imageHeight}
          />
        </TouchableOpacity>
        <Icon
          name={liked ? "heart" : "heart-o"}
          size={30}
          color="#eb4b59"
          style={{ margin: 10 }}
          onPress={this.toggleLikeButton}
        />
        <Text style={styles.author}>{author}</Text>
      </View>
    );
  }
}

Card.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired
};
