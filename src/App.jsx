import { useState } from "react";
import Header from "./components/Header";
import Language_Display from "./components/Language_Display";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";

export default function App() {
  const [gameState, setGameState] = useState({
    counter: 0,
    condition: "running",
  }); // started, running and ended
  const [currentWord, setCurrentWord] = useState("REFACTOR");
  const [playerInput, setPlayerInput] = useState([]);
  const currentWordArr = currentWord.split("");

  function keyboardPress(id) {
    if (!playerInput.includes(id)) {
      setPlayerInput((prevState) => [...prevState, id]);

      if (!currentWord.includes(id)) {
        setGameState((prev) => ({ ...prev, counter: prev.counter + 1 }));
        console.log("Lost a language banner");
      }
    }
  }

  if (playerInput.length !== 0) {
    checkGameState();
  }
  function checkGameState() {
    if (currentWordArr.every((letter) => playerInput.includes(letter)))
      setGameState((prev) => ({ ...prev, condition: "won" }));
    else return;
  }

  return (
    <main>
      <Header />
      <Language_Display />
      <WordDisplay playerInput={playerInput} currentWord={currentWord} />
      <Keyboard
        click={keyboardPress}
        playerInput={playerInput}
        currentWord={currentWord}
      />
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
