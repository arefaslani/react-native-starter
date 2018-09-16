import React from "react";
import {
  Text,
  View,
  Platform,
  StyleSheet,
  ColorPropType,
  TouchableNativeFeedback,
  TouchableOpacity
} from "react-native";
import PropTypes from "prop-types";

const styles = StyleSheet.create({
  button: Platform.select({
    ios: {},
    android: {
      elevation: 4,
      backgroundColor: "#2196F3",
      borderRadius: 2
    }
  }),
  text: Platform.select({
    ios: {
      color: "#007AFF",
      textAlign: "center",
      padding: 8,
      fontSize: 18
    },
    android: {
      color: "white",
      textAlign: "center",
      padding: 8,
      fontWeight: "500"
    }
  }),
  buttonDisabled: Platform.select({
    ios: {},
    android: {
      elevation: 0,
      backgroundColor: "#dfdfdf"
    }
  }),
  textDisabled: Platform.select({
    ios: {
      color: "#cdcdcd"
    },
    android: {
      color: "#a1a1a1"
    }
  })
});

const Button = props => {
  const { title, color, onPress, disabled, textStyle, buttonStyle } = props;
  const textStyles = [styles.text];
  const buttonStyles = [styles.button];
  if (color) {
    if (Platform.OS === "ios") {
      textStyles.push({ color });
    } else {
      buttonStyles.push({ backgroundColor: color });
    }
  }
  if (textStyle) {
    textStyles.push(textStyle);
  }
  if (buttonStyle) {
    buttonStyle.push(buttonStyle);
  }
  if (disabled) {
    buttonStyles.push(styles.buttonDisabled);
    textStyles.push(styles.textDisabled);
  }
  const formattedTitle =
    Platform.OS === "android" ? title.toUpperCase() : title;
  const Touchable =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable disabled={disabled} onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={textStyles}>{formattedTitle}</Text>
      </View>
    </Touchable>
  );
};

Button.defaultProps = {
  disabled: false,
  color: null,
  textStyle: null,
  buttonStyle: null
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  color: ColorPropType,
  buttonStyle: PropTypes.shape({}),
  textStyle: PropTypes.shape({})
};

export default Button;
