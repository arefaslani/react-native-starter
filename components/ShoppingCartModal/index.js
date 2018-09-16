import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView,
  FlatList
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";

import { removeFromCart } from "store/actions/shoppingCart";

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
  },
  modalBody: {},
  shoppingCartItem: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: "#eee",
    borderBottomWidth: 1,
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

const ShoppingCartButton = props => {
  const {
    visible,
    toggleShoppingCart,
    shoppingCartData,
    removeFromShoppingCart
  } = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        toggleShoppingCart();
      }}
    >
      <SafeAreaView>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={toggleShoppingCart}>
              <Icon name="ios-close" size={30} style={{ padding: 10 }} />
            </TouchableOpacity>
          </View>
          <View style={styles.modalBody}>
            {shoppingCartData.length === 0 ? (
              <View style={{ alignItems: "center" }}>
                <Icon name="md-sad" size={30} />
                <Text style={{ fontFamily: "iranyekan-bold" }}>
                  سبد خرید خالی است
                </Text>
              </View>
            ) : (
              <FlatList
                data={shoppingCartData}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.shoppingCartItem}>
                    <View>
                      <Text style={{ textAlign: "right" }}>{item.author}</Text>
                      <Text style={{ textAlign: "right", color: "#aaa" }}>
                        $5000
                      </Text>
                    </View>
                    <Icon
                      name="ios-remove-circle"
                      size={30}
                      color="red"
                      onPress={() => removeFromShoppingCart(item)}
                    />
                  </View>
                )}
              />
            )}
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

ShoppingCartButton.propTypes = {
  shoppingCartData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  visible: PropTypes.bool.isRequired,
  toggleShoppingCart: PropTypes.func.isRequired,
  removeFromShoppingCart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({ shoppingCartData: state.shoppingCart });
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      removeFromShoppingCart: removeFromCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartButton);
