import clsx from "clsx";
import Languages from "../Data/Languages";

export default function Language_Display(props) {
  const LanguageItems = Languages.map((lang, index) => {
    const isLost = lang.id <= props.gameCounter;

    const className = clsx(isLost && "lost");
    return (
      <li
        className={className}
        id={lang.id}
        key={lang.name}
        font-color={lang.font_color}
        style={{ backgroundColor: lang.color }}
      >
        {lang.name}
      </li>
    );
  });

  return <ul className="language-display">{LanguageItems}</ul>;
}
