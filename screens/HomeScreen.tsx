import { ActivityIndicator, StyleSheet, View, Text } from "react-native";
import { useQuery } from "react-query";

import EditScreenInfo from "../components/EditScreenInfo";
import { RootStackScreenProps } from "../types/navigation";
import { User, UserResponse } from "../types/user";
import getUsers from "../api/mockaroo";

export default function TabOneScreen({
  navigation,
}: RootStackScreenProps<"Home">) {
  const { isLoading, data, refetch } = useQuery<User[], Error>(
    ["users"],
    (): Promise<User[]> => getUsers(1, 5).then((response) => response.entries)
  );
  console.log(data);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <View>
          <Text>{data?.length}</Text>
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
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
