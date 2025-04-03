import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the Exercise Tracker</Text>

      {/* Navigate to DurationExercise Screen */}
      <Button 
        title="Duration Exercise" 
        onPress={() => navigation.navigate('DurationExercise')} 
      />

      {/* Navigate to RepetitionExercise Screen */}
      <Button 
        title="Repetition Exercise" 
        onPress={() => navigation.navigate('RepetitionExercise')} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default Home;
