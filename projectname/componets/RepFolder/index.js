import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const RepetitionExercise = ({ route, navigation }) => {
  const { exerciseName } = route.params;
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName}</Text>
      <Text style={styles.count}>{count} reps</Text>
      <Button title="Increase" onPress={increaseCount} />
      <Button title="Reset" onPress={resetCount} />
      
      {/* Home button */}
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

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
    fontSize: 36,
    marginVertical: 20,
  },
});

export default RepetitionExercise;
