import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function Rep({ highestRep, setHighestRep }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;

      if (newCount > highestRep) {
        setHighestRep(newCount);
      }

      return newCount;
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rep Tracking</Text>
      <Text style={styles.instruction}>Click the button to track reps!</Text>
      <Text style={styles.count}>Rep Count: {count}</Text>
      <Button title="Count Up!" onPress={handleIncrement} />
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
  instruction: {
    fontSize: 18,
    marginVertical: 10,
  },
  count: {
    fontSize: 20,
    marginVertical: 10,
  },
});

export default Rep;
