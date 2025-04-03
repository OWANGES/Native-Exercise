import React from 'react';
import { FlatList, View, Button, Text, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {

  const exercises = [
    { id: '1', name: 'Push-up', type: 'Repetition' },
    { id: '2', name: 'Plank', type: 'Duration' },
    { id: '3', name: 'Walking', type: 'Duration' },
    { id: '4', name: 'Running', type: 'Duration' },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.buttonContainer}>
      <Button
        title={item.name}
        onPress={() =>
          navigation.navigate(item.type === 'Repetition' ? 'RepetitionExercise' : 'DurationExercise', {
            exerciseName: item.name,
          })
        }
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Pick an Exercise</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
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
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 10,
  },
});

export default Home;
