import React, { useState } from "react";

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
    <div className="appPage1">
      <h1>Rep Tracking</h1>
      <p>Click the button to track reps!</p>
      <h2>Rep Count: {count}</h2>
      <button onClick={handleIncrement}>Count Up!</button>
    </div>
  );
}

export default Rep;