import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";
import Icon from "@expo/vector-icons/Ionicons";

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  listItemText: {
    fontSize: 20
  }
});

class Categories extends Component {
  selectCategory = item => {
    const { navigation } = this.props;
    navigation.navigate("Category", { ...item, ...this.props });
  };

  render() {
    return (
      <View>
        <FlatList
          data={[
            { id: 1, name: "Books" },
            { id: 2, name: "Toys" },
            { id: 3, name: "Vehicles" },
            { id: 4, name: "Handmade" }
          ]}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.selectCategory(item)}>
              <View style={styles.listItem}>
                <Icon name="ios-arrow-back" size={20} color="#397cf2" />
                <Text style={styles.listItemText}>{item.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

Categories.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired
};

export default Categories;
