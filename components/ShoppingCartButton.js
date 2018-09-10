import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Modal,
  SafeAreaView
} from "react-native";
import Icon from "@expo/vector-icons/Ionicons";

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

export default class extends Component {
  state = { modalVisible: false };

  toggleShoppingBasket = () => {
    this.setState(prevState => ({
      modalVisible: !prevState.modalVisible
    }));
  };

  render() {
    const { modalVisible } = this.state;
    return (
      <TouchableOpacity onPress={this.toggleShoppingBasket}>
        <View style={styles.container}>
          <Icon name="ios-cart" size={30} />
        </View>
        <Modal
          visible={modalVisible}
          onRequestClose={() => {
            console.log("Modal closed");
          }}
        >
          <SafeAreaView>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <TouchableOpacity onPress={this.toggleShoppingBasket}>
                  <Icon name="ios-close" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </Modal>
      </TouchableOpacity>
    );
  }
}
