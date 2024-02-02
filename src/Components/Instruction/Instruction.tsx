import { FC } from "react";
import classes from "./Instruction.module.css";

type Props = {
  children: React.ReactNode[] | React.ReactNode;
};

export const Instruction: FC<Props> = ({ children }) => {
  return <li className={classes["instruction"]}>{children}</li>;
};
