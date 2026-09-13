import { useState, useEffect } from "react";
import Header from "./components/Header";
import Language_Display from "./components/Language_Display";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import Confetti from "react-confetti";
import { getRandomWord } from "./components/utils";

export default function App() {
  const [currentWord, setCurrentWord] = useState(() => getRandomWord());
  const [playerInput, setPlayerInput] = useState([]);
  const lastGuessedLetter = playerInput[playerInput.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !currentWord.includes(lastGuessedLetter);

  //Derived Values
  const gameCounter = playerInput.filter(
    (char) => !currentWord.includes(char),
  ).length; // From 0 to 8

  let gameCondition = "running"; // won, running and lost
  if (playerInput.length > 0) {
    if (currentWord.split("").every((letter) => playerInput.includes(letter))) {
      gameCondition = "won";
    } else if (gameCounter > 7) {
      gameCondition = "lost";
    }
  }
  const isGameOver = ["won", "lost"].includes(gameCondition);
  //console.log(`GameOver: ${isGameOver}`);
  //console.log(`gameCounter: ${gameCounter} \n gameCondition: ${gameCondition}`);

  // function on Keyboard Press
  function keyboardPress(id) {
    if (!playerInput.includes(id)) {
      setPlayerInput((prevState) => [...prevState, id]);

      // if (!currentWord.includes(id)) {
      //   setGameState((prev) => ({ ...prev, counter: prev.counter + 1 }));
      //   console.log("Lost a language banner");
      // }
    }
  }

  //function on New Game
  function newGame() {
    setPlayerInput([]);
    setCurrentWord(getRandomWord());
  }

  return (
    <main>
      <Header
        gameCounter={gameCounter}
        gameCondition={gameCondition}
        isLastGuessIncorrect={isLastGuessIncorrect}
        playerInput={playerInput}
      />
      <Language_Display gameCounter={gameCounter} />
      <WordDisplay
        playerInput={playerInput}
        currentWord={currentWord}
        gameCondition={gameCondition}
      />
      <Keyboard
        click={keyboardPress}
        playerInput={playerInput}
        currentWord={currentWord}
        isGameOver={isGameOver}
      />

      <section>
        {isGameOver && (
          <button id="new-game" onClick={newGame}>
            New Game
          </button>
        )}
      </section>
      {gameCondition === "won" && (
        <Confetti recycle={false} numberOfPieces={1000} />
      )}
    </main>
  );
}

// if (char.letter === id) {
//           const isMatch = currentWord.toUpperCase().includes(id);

//           return {
//             ...char,
//             color: isMatch ?
//           };
//         } else return char;

// useEffect(() => {
//     if (playerInput.length !== 0) {
//       if (currentWordArr.every((letter) => playerInput.includes(letter))) {
//         setGameState((prev) => ({ ...prev, condition: "won" }));
//       } else if (gameCounter > 8) {
//         setGameState((prev) => ({ ...prev, condition: "lost" }));
//       }
//     }
//   }, [playerInput]);
