import { PropsWithChildren } from "react";
import "./container.styles.scss";

interface Props extends PropsWithChildren {}

export const Container = ({ children }: Props) => {
  return <div className="app">{children}</div>;
};
