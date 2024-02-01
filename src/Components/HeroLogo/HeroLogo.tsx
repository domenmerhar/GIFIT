import React, { FC } from "react";

import classes from "./HeroLogo.module.css";

type Props = {
  children: React.ReactNode;
};

export const HeroLogo: FC<Props> = ({ children }) => {
  return (
    <>
      <h1 className={classes.logo}>
        GIT<span>IT</span>
      </h1>
      {children}
    </>
  );
};
