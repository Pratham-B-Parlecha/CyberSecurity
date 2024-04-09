import React from "react";
import classes from "./dashBoardNav.module.css";
import UserProfile from "../ui/UserProfile";

export default function DashBoardNav() {
  return (
    <nav className={classes.navCon}>
      <UserProfile svgClass={classes.svg} />
    </nav>
  );
}



