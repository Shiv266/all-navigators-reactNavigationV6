import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { COLORS } from "../../constants/colors";

export const Notifications = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Notifications</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    color: COLORS.DEFAULT_YELLOW,
    fontWeight: "bold",
  },
});
