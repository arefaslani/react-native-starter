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
    borderBottomWidth: 1
  }
});

const ShoppingCartButton = props => {
  const { visible, toggleShoppingCart, shoppingCartData } = props;

  return (
    <Modal
      visible={visible}
      onRequestClose={() => {
        console.log("Modal closed");
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
            <FlatList
              data={shoppingCartData}
              keyExtractor={item => item.id.toString()}
              renderItem={({ item }) => (
                <View style={styles.shoppingCartItem}>
                  <Text>{item.author}</Text>
                </View>
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

ShoppingCartButton.propTypes = {
  shoppingCartData: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  visible: PropTypes.bool.isRequired,
  toggleShoppingCart: PropTypes.func.isRequired
};

export default connect(state => ({ shoppingCartData: state.shoppingCart }))(
  ShoppingCartButton
);
