import { FC } from "react";

import classes from "./GIFITSpan.module.css";

type Props = {
  fontSize: number;
};

export const GIFITSpan: FC<Props> = ({ fontSize }) => {
  return (
    <span className={classes["GIFIT"]} style={{ fontSize }}>
      GIF<span style={{ fontSize: fontSize * 1.2 }}>IT</span>
    </span>
  );
};
