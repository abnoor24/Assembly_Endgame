import { clsx } from "clsx";

export default function WordDisplay(props) {
  const answerDisplay = props.currentWord.split("").map((char, index) => {
    const isLost = props.gameCondition === "lost";
    const isShown = props.playerInput.includes(char) ? true : false;
    const className = clsx(isLost && !isShown && "missed-letter");
    return (
      <span key={index} className={className}>
        {isShown || isLost ? char.toUpperCase() : ""}
      </span>
    );
  });

  return <section className="word">{answerDisplay}</section>;
}
