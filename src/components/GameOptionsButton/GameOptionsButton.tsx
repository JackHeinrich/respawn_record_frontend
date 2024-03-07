import "./GameOptionsButton.css";
import { useState } from "react";

interface Props {
  iconClassName: string;
  clickFunction?: () => void;
  label: string;
  altLabel: string;
}

export default function GameOptionsButton({
  iconClassName,
  clickFunction,
  label,
  altLabel,
}: Props) {
  const [fill, setFill] = useState("");

  const handleClick = () => {
    setFill(fill ? "" : "-fill");
    if (clickFunction) {
      clickFunction();
    }
  };

  return (
    <button className="button invisible-button" onClick={handleClick}>
      <i
        className={
          iconClassName + fill + " h1" + (!fill ? " secondary" : " success")
        }
      />
      <p className="text-body-secondary">{!fill ? label : altLabel}</p>
    </button>
  );
}
