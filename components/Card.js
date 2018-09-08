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

export default class Card extends Component {
  navigateHandler = () => {
    const { navigation } = this.props;
    navigation.navigate("Post", this.props);
  };

  render() {
    const { image, caption } = this.props;
    return (
      <TouchableOpacity onPress={this.navigateHandler}>
        <View>
          <Image source={image} style={styles.image} />
          <Text style={styles.caption}>{caption}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

Card.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  image: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired
};
