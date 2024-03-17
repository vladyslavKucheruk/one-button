import { ButtonHTMLAttributes } from "react";

import "./button.styles.scss";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button className="button__main" {...rest}>
      {children}
    </button>
  );
};
