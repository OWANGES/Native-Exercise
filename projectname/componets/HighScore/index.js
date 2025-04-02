
import React from "react";

function Highscore({ highestRep }) {
  return (
    <div className="highscorePage">
      <h1>Highscore Page</h1>
      <h2>Highest Rep Count: {highestRep}</h2>
    </div>
  );
}

export default Highscore;