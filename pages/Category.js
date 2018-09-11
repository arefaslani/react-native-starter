import React, { Component } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row"
  },
  priceTag: {
    color: "#aaa"
  },
  listItemProps: {
    marginLeft: 10
  }
});

class Category extends Component {
  openProduct = item => {
    const { navigation } = this.props;
    navigation.navigate("Product", { ...this.props, ...item });
  };

  render() {
    const { posts } = this.props;
    return (
      <View>
        <FlatList
          data={posts.slice(0, 20)}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this.openProduct(item)}>
              <View style={styles.listItemContainer}>
                <Image
                  source={{
                    uri: `https://picsum.photos/50?image=${item.id}`,
                    height: 50,
                    width: 50
                  }}
                />
                <View style={styles.listItemProps}>
                  <Text>{item.author}</Text>
                  <Text style={styles.priceTag}>$50,000</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

Category.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  posts: PropTypes.shape({}).isRequired
};

const mapStateToProps = state => ({ posts: state.posts });

export default connect(mapStateToProps)(Category);
