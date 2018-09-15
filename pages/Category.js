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
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import Swipeout from "react-native-swipeout";

import { addToCart } from "store/actions/shoppingCart";

const styles = StyleSheet.create({
  listItemContainer: {
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    flexDirection: "row-reverse"
  },
  priceTag: {
    color: "#aaa"
  },
  listItemProps: {
    marginRight: 10,
    alignItems: "flex-end",
    justifyContent: "space-around"
  }
});

class Category extends Component {
  state = { page: 1, per: 10 };

  openProduct = item => {
    const { navigation } = this.props;
    navigation.navigate("Product", { ...this.props, ...item });
  };

  render() {
    const { posts, addToShoppingCart } = this.props;
    const { per, page } = this.state;
    return (
      <View>
        <FlatList
          data={posts.slice(0, (page - 1) * per + per)}
          keyExtractor={item => item.id.toString()}
          ref={el => {
            this.flatlist = el;
          }}
          onEndReached={() => {
            this.setState({ page: page + 1 });
          }}
          renderItem={({ item }) => {
            const swipeSettings = {
              autoClose: true,
              scroll: scrollEnabled => {
                this.flatlist.getScrollResponder().setNativeProps({
                  scrollEnabled
                });
              },
              right: [
                {
                  text: "Add",
                  backgroundColor: "#4caf50",
                  onPress: () => {
                    addToShoppingCart(item);
                  }
                }
              ]
            };
            return (
              <Swipeout {...swipeSettings}>
                <TouchableOpacity
                  onPress={() => this.openProduct(item)}
                  activeOpacity={0.7}
                >
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
              </Swipeout>
            );
          }}
        />
      </View>
    );
  }
}

Category.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapStateToProps = state => ({
  posts: state.posts,
  shoppingCart: state.shoppingCart
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      addToShoppingCart: addToCart
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
