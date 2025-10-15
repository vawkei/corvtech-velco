import type { ReactNode } from "react";
import classes from "./Button.module.scss";
// import type { Button } from "../../../interfaces/interfaces";

 interface Button{
  children: ReactNode;
  className:string;
  onClick?:()=>void;
  type?: "button"|"submit"
}

const Button = (props: Button) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      //   onClick={() => props.onClick}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
};

export default Button;
