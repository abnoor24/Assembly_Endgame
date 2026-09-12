import Languages from "../Data/Languages";

export default function GameBanner(props) {
  if (props.gameState.condition === "end") {
    return (
      <div
        className="game-state-display"
        style={{ backgroundColor: "#BA2A2A" }}
      >
        <h3>Game over!</h3>
        <h4>You lose! Better start learning Assembly 😭</h4>
      </div>
    );
  } else if (props.gameState.condition === "won") {
    return (
      <div
        className="game-state-display"
        style={{ backgroundColor: "#10a95b" }}
      >
        <h3>You Win!</h3>
        <h4> Well done!🎉</h4>
      </div>
    );
  } else if (props.gameState.counter > 0) {
    <div
      className="game-state-display"
      style={{ backgroundColor: "#7A5EA7", border: "1px solid #323232" }}
    >
      <h3>“Farewell {Languages}” 🫡</h3>
    </div>;
  }

  return "";
}

//background-color: #10a95b;
