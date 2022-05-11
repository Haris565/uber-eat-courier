import { StatusBar } from "expo-status-bar";
import { useRef } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import orders from "./assets/data/orders.json";
import OrderItem from "./src/components/OrderItem";
import OrderScreen from "./src/screen/OrderScreen";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={orders}
        renderItem={({ item }) => <OrderItem order={item} />}
      /> */}
      <OrderScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingTop: 30,
  },
});
