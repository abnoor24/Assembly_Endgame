//Contains the top Heading, with display text
// Also contains the game state banner which state wheather you win or lose.
import GameBanner from "./GameBanner";

export default function Header(props) {
  return (
    <header className="heading">
      <h3 id="title">Assembly Endgame</h3>
      <p>
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>

      <GameBanner
        gameCounter={props.gameCounter}
        gameCondition={props.gameCondition}
        isLastGuessIncorrect={props.isLastGuessIncorrect}
        playerInput={props.playerInput}
      />
    </header>
  );
}
