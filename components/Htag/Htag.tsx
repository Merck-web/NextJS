import { HtagProps } from "./Htag.props";
import styled from "./Htag.module.scss";

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  switch (tag) {
    case "h1":
      return <h1 className={styled.h1}>{children}</h1>;
    case "h2":
      return <h2 className={styled.h2}>{children}</h2>;
    case "h3":
      return <h3 className={styled.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
