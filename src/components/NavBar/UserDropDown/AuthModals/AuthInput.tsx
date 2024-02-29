import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
  invalidValueMessage: string;
  isValidConditionals: (input: string) => boolean;
}

export default function AuthInput({
  label,
  placeholder,
  setValue,
  invalidValueMessage,
  isValidConditionals,
}: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    if (isValidConditionals(input)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
    setValue(input);
  };

  const [isValid, setIsValid] = useState(false);

  return (
    <>
      <label className="form-label mt-2 mb-2">{label}</label>
      <input
        className="form-control mt-2 mb-2"
        placeholder={placeholder}
        onChange={handleChange}
      />
      {!isValid && <p className="text-danger">{invalidValueMessage}</p>}
    </>
  );
}
