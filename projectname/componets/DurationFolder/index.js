import React, { useState, useEffect, useRef } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Duration = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalIdRef = useRef(null);

  // Start/stop timer on state change of `isRunning`
  useEffect(() => {
    if (isRunning) {
      console.log("Starting timer...");
      intervalIdRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      console.log("Stopping timer...");
      clearInterval(intervalIdRef.current);
    }

    // Cleanup the interval on unmount or when `isRunning` is false
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  // Start/stop the timer
  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>
        {hours}h : {minutes}m : {remainingSeconds}s
      </Text>
      <Button title={isRunning ? "Stop" : "Start"} onPress={handleStartStop} />
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  timer: {
    fontSize: 36,
    marginBottom: 20,
  },
});

export default Duration;
