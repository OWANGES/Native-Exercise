import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DurationExercise = ({ route, navigation }) => {
  const { exerciseName } = route.params;
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!isRunning) {
      const id = setInterval(() => {
        setTimer(prevTime => prevTime + 10);
      }, 10);
      setIsRunning(true);
      setIntervalId(id);
    }
  };

  const resetTimer = () => {
    setTimer(0);
    if (intervalId) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{exerciseName}</Text>
      <Text style={styles.count}>{formatTime(timer)}</Text>
      <Button title="Start Timer" onPress={startTimer} disabled={isRunning} />
      <Button title="Reset Timer" onPress={resetTimer} />
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

export default DurationExercise;
