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
    height: height / 2,
    marginBottom: 10
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
});

export default class Card extends Component {
  navigateHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("Post", this.props);
  };

  render() {
    const { imageId, author } = this.props;
    console.log(`https://picsum.photos/200/300?${imageId}`);
    return (
      <TouchableOpacity onPress={this.navigateHandler}>
        <View>
          <Image
            source={{ uri: `https://picsum.photos/200/300?${imageId}` }}
            style={styles.image}
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
