import { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import "./input.styles.scss";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

export const Input = ({ label, labelProps, ...rest }: Props) => {
  return (
    <label {...labelProps} className="input__label">
      {label}
      <input {...rest} type="text" />
    </label>
  );
};
