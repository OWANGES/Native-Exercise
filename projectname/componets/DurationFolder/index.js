import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DurationExercise = ({ route, navigation }) => {
  const { exerciseName } = route.params;
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startStopTimer = () => {
    setIsRunning(!isRunning);
    if (!isRunning) {
      setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
  };

  const resetTimer = () => {
    setSeconds(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName}</Text>
      <Text style={styles.timer}>
        {String(Math.floor(seconds / 3600)).padStart(2, '0')}:
        {String(Math.floor((seconds % 3600) / 60)).padStart(2, '0')}:
        {String(seconds % 60).padStart(2, '0')}
      </Text>
      <Button title={isRunning ? 'Stop' : 'Start'} onPress={startStopTimer} />
      <Button title="Reset" onPress={resetTimer} />
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate('RepetitionExercise', { exerciseName: 'Push-up' })}
      />
      <Button title="Home" onPress={() => navigation.navigate('HomeScreen')} />
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
  timer: {
    fontSize: 36,
    marginVertical: 20,
  },
});

export default DurationExercise;
