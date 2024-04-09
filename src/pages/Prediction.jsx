import React from "react";
import DashBoardNav from "../components/DashBoard/DashBoardNav";
import classes from "./prediction.module.css";
import Dropdown from "../components/DropDown/Dropdown";

export default function Prediction() {
  return (
    <div className={classes.con}>
      <div className={classes.predConn}>
        <h1 className={classes.header}>Prediction</h1>
        <DashBoardNav />
      </div>
      <div className={classes.wrap}>
        <div className={classes.preDropCon}>
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
          <Dropdown />
        </div>
        <button className={classes.btn}>Predict</button>
      </div>
    </div>
  );
}
