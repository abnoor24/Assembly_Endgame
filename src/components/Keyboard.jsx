export default function Keyboard(props) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const keyboardDisplay = alphabet.split("").map((char) => {
    let color = "#fcba29";
    if (props.playerInput.includes(char)) {
      props.currentWord.includes(char)
        ? (color = "#10A95B")
        : (color = "#EC5D49");
    }
    return (
      <button
        key={char}
        on="false"
        style={{ backgroundColor: color }}
        onClick={() => props.click(char)}
      >
        {char}
      </button>
    );
  });
  return <section className="keyboard">{keyboardDisplay}</section>;
}
