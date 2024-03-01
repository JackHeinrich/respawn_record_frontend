import { useState } from "react";

interface Props {
  label: string;
  placeholder: string;
  setValue: (value: string) => void;
  invalidValueMessage: string;
  isValidConditionals: (input: string) => boolean;
  value: string;
  type: string;
}

export default function AuthInput({
  label,
  placeholder,
  setValue,
  invalidValueMessage = "",
  isValidConditionals = () => {
    return true;
  },
  value,
  type,
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

  const [isValid, setIsValid] = useState(true);

  return (
    <>
      <label className="form-label mt-2 mb-2">{label}</label>
      <input
        className="form-control mt-2 mb-2"
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        required
        type={type}
      />
      {!isValid && <p className="text-danger">{invalidValueMessage}</p>}
    </>
  );
}
