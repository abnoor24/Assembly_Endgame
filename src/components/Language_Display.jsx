import Languages from "../Data/Languages";

export default function Language_Display() {
  const LanguageItems = Languages.map((lang) => {
    return (
      <li
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
