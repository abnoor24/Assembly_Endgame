import { clsx } from "clsx";

export default function Keyboard(props) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  const keyboardDisplay = alphabet.split("").map((letter) => {
    const isGuessed = props.playerInput.includes(letter);
    const isCorrect = isGuessed && props.currentWord.includes(letter);
    const isWrong = isGuessed && !props.currentWord.includes(letter);

    //CLSX constructor for className
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });

    return (
      <button
        key={letter}
        on="false"
        className={className}
        onClick={() => props.click(letter)}
        disabled={props.isGameOver}
        aria-disabled={props.playerInput.includes(letter)}
        aria-label={`label: ${letter}`}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  return <section className="keyboard">{keyboardDisplay}</section>;
}
