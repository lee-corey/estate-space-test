import { ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { useQuery } from "react-query";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootStackScreenProps } from "../types/navigation";
import { User, UserResponse } from "../types/user";
import { Text, View } from "../components/Themed";
import UserItem from "../components/UserItem";
import getUsers from "../api/mockaroo";

export default function TabOneScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const { isLoading, data, refetch } = useQuery<User[], Error>(
    ["users"],
    (): Promise<User[]> => getUsers(1, 5).then((response) => response.entries)
  );

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        <View style={styles.mainContainer}>
          <Text style={styles.title}>Users from mockaroo</Text>
          <FlatList<User>
            data={data}
            renderItem={({ item }) => <UserItem item={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      )}
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
    width: "100%",
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 15,
  },
});
