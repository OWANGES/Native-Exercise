import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Duration from './components/DurationFolder/index.js';
import Rep from "./components/RepFolder/index.js";
import Highscore from "./components/HighScore/index.js";


function App() {
  const [showPageDuration, setShowPageDuration] = useState(false);
  const [showPageRep, setShowPageRep] = useState(false);
  const [exercise, setExercise] = useState('');
  const [isPromptVisible, setIsPromptVisible] = useState(false);
  const [highestRep, setHighestRep] = useState(0);

  const handleExerciseSelection = (exerciseType) => {
    setExercise(exerciseType);
    setIsPromptVisible(true);
  };

  const handleRepDurationSelection = (selection) => {
    if (selection === "Duration") {
      setShowPageDuration(true);
      setShowPageRep(false);
    } else if (selection === "Rep") {
      setShowPageRep(true);
      setShowPageDuration(false);
    }
    setIsPromptVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pick an Exercise</Text>
      
      <View style={styles.gridContainer}>
        <Button title="Push-up" onPress={() => handleExerciseSelection('Push-up')} />
        <Button title="Plank" onPress={() => handleExerciseSelection('Plank')} />
        <Button title="Walking" onPress={() => handleExerciseSelection('Walking')} />
        <Button title="Running" onPress={() => handleExerciseSelection('Running')} />
      </View>

      {isPromptVisible && (
        <View style={styles.prompt}>
          <Text>Would you like to track by Duration or Rep for {exercise}?</Text>
          <Button title="Duration" onPress={() => handleRepDurationSelection("Duration")} />
          <Button title="Rep" onPress={() => handleRepDurationSelection("Rep")} />
        </View>
      )}

      {showPageDuration && <Duration />}
      {showPageRep && <Rep setHighestRep={setHighestRep} highestRep={highestRep} />}
      {showPageRep && <Highscore highestRep={highestRep} />}
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
  gridContainer: {
    marginVertical: 20,
    width: '100%',
    justifyContent: 'space-between',
  },
  prompt: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default App;
