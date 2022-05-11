import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          borderColor: "#3FC060",
          borderWidth: 2,
          borderRadius: 10,
          marginHorizontal: 5,
        }}
      >
        <Image
          source={{ uri: order.Restaurant.image }}
          style={{
            width: "30%",
            height: "100%",
            borderBottomLeftRadius: 10,
            borderTopLeftRadius: 10,
          }}
        />
        <View style={{ marginLeft: 5, width: "60%" }}>
          <Text style={{ fontSize: 16, fontWeight: "700" }}>
            {order.Restaurant.name}
          </Text>
          <Text style={{ color: "gray" }}>{order.Restaurant.address}</Text>
          <Text style={{ marginTop: 10, fontWeight: "700" }}>
            Delivery Details:
          </Text>
          <Text style={{ color: "gray" }}>{order.User.name}</Text>
          <Text style={{ color: "gray" }}>{order.User.address}</Text>
        </View>
        <View
          style={{
            backgroundColor: "#3FC060",
            flex: 1,
            borderBottomRightRadius: 10,
            borderTopRightRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            width: "10%",
          }}
        >
          <Entypo name="check" size={24} color="white" style={{}} />
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
};

export default OrderItem;
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});
