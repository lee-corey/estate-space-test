import React, { useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useQuery } from "react-query";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootStackScreenProps } from "../types/navigation";
import { User, UserResponse } from "../types/user";
import { Text, View } from "../components/Themed";
import UserItem from "../components/UserItem";
import getUsers from "../api/mockaroo";
import Button from "../components/Button";

const count = 5;
const totalPages = 1000 / count;

export default function HomeScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const [page, setPage] = useState<number>(0);

  const { isFetching, data, refetch } = useQuery<User[], Error>(
    ["users", page],
    (): Promise<User[]> =>
      getUsers(page, count).then((response) => response.entries)
  );

  const onBefore = () => {
    setPage((prev) => prev - 1);
  };

  const onNext = () => {
    setPage((prev) => prev + 1);
  };
  console.log(isFetching);
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Users from mockaroo</Text>
        <View style={styles.dataContainer}>
          {isFetching ? (
            <ActivityIndicator size="large" />
          ) : (
            <FlatList<User>
              data={data}
              renderItem={({ item }) => <UserItem item={item} />}
              keyExtractor={(item) => item.id.toString()}
            />
          )}
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Before" onPress={onBefore} disabled={page === 0} />
          <Text>{`${page + 1} of ${totalPages}`}</Text>
          <Button
            text="Next"
            onPress={onNext}
            disabled={page === totalPages - 1}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  mainContainer: {
    flex: 1,
    padding: 20,
    width: "100%",
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
  dataContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 15,
  },
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
});
