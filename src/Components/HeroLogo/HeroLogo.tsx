import React, { FC } from "react";

import classes from "./HeroLogo.module.css";

type Props = {
  children: React.ReactNode;
};

export const HeroLogo: FC<Props> = ({ children }) => {
  return (
    <nav className={classes.logo}>
      <h1>GIF</h1>
      <span>IT</span>
      {children}
    </nav>
  );
};
