import './App.css';
import React, { useState } from 'react';
import Duration from "./components/DurationFolder";
import Rep from "./components/RepFolder";
import Highscore from "./components/HighScore"; 
//import { StyleSheet, SafeAreaView, FlatList, Text, View, TextInput, Button, CheckBox, Platform } from 'react-native'; // Ensure Platform is imported here

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
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Pick an Exercise</h1>
        </div>
        
        <div className="grid-container">
          <button onClick={() => handleExerciseSelection('Push-up')}>Push-up</button>
          <button onClick={() => handleExerciseSelection('Plank')}>Plank</button>
          <button onClick={() => handleExerciseSelection('Walking')}>Walking</button>
          <button onClick={() => handleExerciseSelection('Running')}>Running</button>
        </div>

        {isPromptVisible && (
          <div className="prompt">
            <p>Would you like to track by Duration or Rep for {exercise}?</p>
            <button onClick={() => handleRepDurationSelection("Duration")}>Duration</button>
            <button onClick={() => handleRepDurationSelection("Rep")}>Rep</button>
          </div>
        )}

        {showPageDuration && <Duration />} 
        {showPageRep && <Rep setHighestRep={setHighestRep} highestRep={highestRep} />} 

        {showPageRep && <Highscore highestRep={highestRep} />}
      </header>
    </div>
  );
}

export default App;