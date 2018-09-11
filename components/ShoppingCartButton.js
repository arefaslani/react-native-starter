import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import IconBadge from "react-native-icon-badge";
import PropTypes from "prop-types";

import ShoppingCartModal from "components/ShoppingCartModal";

const styles = StyleSheet.create({
  container: {
    margin: 10
  },
  modalContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  modalHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between"
  }
});

class ShoppingCartButton extends Component {
  state = { modalVisible: false };

  toggleShoppingCart = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  };

  render() {
    const { shoppingCart } = this.props;
    const { modalVisible } = this.state;
    return (
      <TouchableOpacity onPress={this.toggleShoppingCart}>
        <View style={styles.container}>
          <IconBadge
            MainElement={<Icon name="ios-cart" size={30} />}
            BadgeElement={
              <Text style={{ color: "#fff" }}>{shoppingCart.length}</Text>
            }
            IconBadgeStyle={{
              marginRight: 10,
              marginTop: -10,
              backgroundColor: "red"
            }}
            Hidden={shoppingCart.length === 0}
          />
        </View>
        <ShoppingCartModal
          visible={modalVisible}
          toggleShoppingCart={this.toggleShoppingCart}
        />
      </TouchableOpacity>
    );
  }
}

ShoppingCartButton.propTypes = {
  shoppingCart: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default connect(state => ({ shoppingCart: state.shoppingCart }))(
  ShoppingCartButton
);
