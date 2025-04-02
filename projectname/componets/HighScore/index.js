import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Highscore({ highestRep }) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Highscore Page</Text>
      <Text style={styles.count}>Highest Rep Count: {highestRep}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Highscore;
