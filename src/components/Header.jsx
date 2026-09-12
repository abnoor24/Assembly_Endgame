//Contains the top Heading, with display text
// Also contains the game state banner which state wheather you win or lose.

export default function Header() {
  return (
    <header className="heading">
      <h3 id="title">Assembly Endgame</h3>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <div className="game-state-display">
        <h3>You Win!</h3>
        <h4> Well done!🎉</h4>
      </div>
    </header>
  );
}
