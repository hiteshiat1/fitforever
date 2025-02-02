import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AccountDropdown from "../components/AccountDropdown";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flex: 1 }} />
        <AccountDropdown navigation={navigation} />
      </View>
      <View style={styles.gridContainer}>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigation.navigate("Workout")}
        >
          {/* Replace with your Workout icon */}
          <Text>Workout</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigation.navigate("Cardio")}
        >
          <TouchableOpacity
            style={styles.tile}
            onPress={() => navigation.navigate("Yoga")}
          >
            {/* Replace with your Yoga icon */}
            <Text>Yoga</Text>
          </TouchableOpacity>
          {/* Replace with your Cardio icon */}
          <Text>Cardio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tile}
          onPress={() => navigation.navigate("Diet")}
        >
          {/* Replace with your Diet icon */}
          <Text>Diet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  tile: {
    width: "45%", // Adjust as needed
    aspectRatio: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default HomeScreen;
