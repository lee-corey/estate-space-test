import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "./Themed";

export default function Button({
  text,
  onPress,
  disabled,
}: {
  text: string;
  onPress: () => void;
  disabled: boolean;
}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      disabled={disabled}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, disabled && styles.disabledText]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = {
  button: {
    width: 100,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
  },
  disabledButton: {
    borderColor: "#ccc",
  },
  buttonText: {
    fontSize: 14,
  },
  disabledText: {
    color: "#ccc",
  },
};
