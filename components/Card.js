import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Card extends Component {
  render() {
    const {image, caption} = this.props;
    return (
      <View>
        <Image source={image} style={styles.image} />
        <Text style={styles.caption}>{caption}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    width: width - 20,
    marginBottom: 10
  },
  caption: {
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
  }
})
