import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colours } from '../utils/colours';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: colours.white,
      borderWidth: 2
    },
    text: { color: colours.white, fontSize: size / 3 },
  });