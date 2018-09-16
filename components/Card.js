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
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { findIndex } from "lodash";

import { addToCart, removeFromCart } from "store/actions/shoppingCart";
import play from "utilities/playSound";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 10,
    alignItems: "flex-end"
  },
  image: {
    width: width - 20
  },
  author: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontFamily: "iranyekan-light"
  }
});

class Card extends Component {
  constructor(props) {
    const { id, shoppingCart } = props;
    const itemIndex = findIndex(shoppingCart, o => o.id === id);
    super();
    if (itemIndex >= 0) {
      this.state = { added: true };
    }
  }

  state = { imageHeight: height / 2, added: false };

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

  toggleCart = () => {
    const { added } = this.state;
    const { addToShoppingCart, removeFromShoppingCart } = this.props;
    if (added) {
      removeFromShoppingCart({ ...this.props });
      play("dislike");
    } else {
      addToShoppingCart({ ...this.props });
      play("like");
    }
    this.setState({ added: !added });
  };

  imageURI = id => `https://picsum.photos/300?image=${id}`;

  render() {
    const { id, author } = this.props;
    const { imageHeight, added } = this.state;
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
          name={added ? "cart-off" : "cart-plus"}
          size={30}
          color={added ? "#eb4b59" : "green"}
          style={{ margin: 10 }}
          onPress={this.toggleCart}
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
  author: PropTypes.string.isRequired,
  addToShoppingCart: PropTypes.func.isRequired,
  removeFromShoppingCart: PropTypes.func.isRequired,
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapStateToProps = state => ({
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToShoppingCart: addToCart,
      removeFromShoppingCart: removeFromCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
