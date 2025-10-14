import type { CardProps } from "../../../interfaces/interfaces";
import classes from "./Card.module.scss";

const Card = (props: CardProps) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
