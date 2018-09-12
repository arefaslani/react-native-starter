import React from "react";
import { FlatList } from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Card from "components/Card";
import { fetchPosts } from "store/actions/posts";

class Home extends React.Component {
  state = { page: 1, per: 10 };

  componentWillMount() {
    const { fetchAllPosts } = this.props;
    fetchAllPosts();
  }

  render() {
    const { per, page } = this.state;
    const { navigation, posts } = this.props;
    return (
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={posts.slice(0, (page - 1) * per + per)}
        style={{ paddingTop: 10 }}
        onEndReached={() => {
          this.setState({ page: page + 1 });
        }}
        renderItem={({ item }) => <Card {...item} navigation={navigation} />}
      />
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
