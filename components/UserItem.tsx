import React from "react";
import { StyleSheet } from "react-native";

import { View, Text } from "./Themed";
import { User } from "../types/user";

export default function UserItem({ item }: { item: User }) {
  return (
    <View style={styles.container}>
      <Text>{`${item.name.firstName} ${item.name.lastName}`}</Text>
      <Text>{item.email}</Text>
      <Text>{item.gender}</Text>
      <Text>{item.role}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "gray",
    padding: 15,
    width: "100%",
    marginBottom: 10,
  },
});
