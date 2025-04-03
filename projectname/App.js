import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RepetitionExercise from './componets/RepFolder';
import DurationExercise from './componets/DurationFolder';

const exercises = [
  { id: '1', name: 'Push-up', type: 'Repetition' },
  { id: '2', name: 'Plank', type: 'Duration' },
  { id: '3', name: 'Walking', type: 'Duration' },
  { id: '4', name: 'Running', type: 'Duration' },
];

const HomeScreen = ({ navigation }) => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseSelection = (item) => {
    setSelectedExercise(item); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <Button
        title={item.name}
        onPress={() => handleExerciseSelection(item)}
      />
    </View>
  );

  const handleTypeSelection = (type) => {
    if (selectedExercise) {
      navigation.navigate(type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
        exerciseName: selectedExercise.name,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pick an Exercise</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      {selectedExercise && (
        <View style={styles.prompt}>
          <Text>Would you like to track {selectedExercise.name} by:</Text>
          <Button title="Repetitions" onPress={() => handleTypeSelection('Repetition')} />
          <Button title="Duration" onPress={() => handleTypeSelection('Duration')} />
        </View>
      )}
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="RepetitionExercise" component={RepetitionExercise} />
        <Stack.Screen name="DurationExercise" component={DurationExercise} />
      </Stack.Navigator>
    </NavigationContainer>
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
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
  prompt: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default App;
