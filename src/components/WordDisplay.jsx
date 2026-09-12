export default function WordDisplay(props) {
  const answerDisplay = props.currentWord.split("").map((char, index) => {
    const isShown = props.playerInput.includes(char) ? true : false;
    return <span key={index}>{isShown ? char : ""}</span>;
  });

  return <section className="word">{answerDisplay}</section>;
}

//playerInput
//currentWord
