import React from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Carousel, { Pagination } from "react-native-snap-carousel";

import { fetchPosts } from "store/actions/posts";

const { width } = Dimensions.get("window");
class Home extends React.Component {
  state = { activeDotIndex: 0 };

  componentWillMount() {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
  }

  render() {
    const { navigation, posts } = this.props;
    const { activeDotIndex } = this.state;
    return (
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <View style={{ position: "relative" }}>
          <Carousel
            data={posts.slice(0, 5)}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Product", { ...item })}
                activeOpacity={0.7}
              >
                <Image
                  source={{
                    uri: `https://picsum.photos/200?image=${item.id}`
                  }}
                  style={{ width: "100%", height: 200 }}
                />
              </TouchableOpacity>
            )}
            sliderWidth={width}
            itemWidth={width}
            onSnapToItem={index => this.setState({ activeDotIndex: index })}
          />
          <Pagination
            dotsLength={5}
            activeDotIndex={activeDotIndex}
            containerStyle={{
              backgroundColor: "transparent",
              height: 65,
              width: "100%",
              position: "absolute",
              bottom: -10
            }}
            dotStyle={{
              width: 20,
              height: 20,
              borderRadius: 10,
              marginHorizontal: 4,
              backgroundColor: "#999",
              borderColor: "#fff",
              borderWidth: 2
            }}
            inactiveDotStyle={
              {
                // Define styles for inactive dots here
              }
            }
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.4}
          />
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              marginTop: 10,
              fontWeight: "200",
              fontFamily: "iranyekan-bold"
            }}
          >
            محصولات شگفت انگیز
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {posts.slice(5, 13).map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Product", { ...item })}
                activeOpacity={0.7}
              >
                <View
                  style={{
                    marginRight: index === 7 ? 0 : 10,
                    width: width / 4
                  }}
                >
                  <Image
                    source={{
                      uri: `https://picsum.photos/300?image=${item.id}`
                    }}
                    style={{ width: "100%", height: width / 4 }}
                  />
                  <Text style={{ marginTop: 5, textAlign: "center" }}>
                    {item.author}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <Text
            style={{
              paddingHorizontal: 10,
              paddingVertical: 5,
              fontWeight: "200",
              fontFamily: "iranyekan-bold",
              marginTop: 10
            }}
          >
            محصولات پرفروش
          </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {posts.slice(13, 21).map((item, index) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => navigation.navigate("Product", { ...item })}
                activeOpacity={0.7}
              >
                <View
                  style={{
                    marginRight: index === 7 ? 0 : 10,
                    width: width / 2
                  }}
                >
                  <Image
                    source={{
                      uri: `https://picsum.photos/300?image=${item.id}`
                    }}
                    style={{ width: "100%", height: width / 2 }}
                  />
                  <Text
                    style={{ marginTop: 5, marginRight: 2, textAlign: "right" }}
                  >
                    {item.author}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func.isRequired })
    .isRequired,
  fetchAllPosts: PropTypes.func.isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchAllPosts: fetchPosts
    },
    dispatch
  );

const mapStateToProps = state => ({ posts: state.posts });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
