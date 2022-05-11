import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useRef, useMemo, useCallback } from "react";
import orders from "../../../assets/data/orders.json";
import OrderItem from "../../components/OrderItem";
import BottomSheet from "@gorhom/bottom-sheet";
const OrderScreen = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["10%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <View style={styles.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <View style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
      {/* <FlatList
          data={orders}
          renderItem={({ item }) => <OrderItem order={item} />}
        /> */}
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
