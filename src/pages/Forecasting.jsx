import React, { useState } from "react";
import Dropdown from "../components/DropDown/Dropdown";
import classes from "./forecasting.module.css";
import DashBoardNav from "../components/DashBoard/DashBoardNav";

export default function Forecasting() {
  const [selected, setSelected] = useState("");
  const handleSelect = (value) => {
    setSelected(value);
  };
  return (
    <div className={classes.predCon}>
      <div className={classes.con}>
        <h1 className={classes.header}>ForeCasting</h1>
        <DashBoardNav />
      </div>
      <div className={classes.btnaction}>
        <button className={classes.btn} onClick={() => handleSelect("state")}>
          State
        </button>
        <button
          className={classes.btn}
          onClick={() => handleSelect("district")}
        >
          District
        </button>
      </div>
      {selected === "state" && (
        <div className={classes.stateCon}>
          <div className={classes.DropCon}>
            <Dropdown />
            <Dropdown />
          </div>
          <button className={classes.btn}>Predict</button>
        </div>
      )}
      {selected === "district" && (
        <div className={classes.stateCon}>
          <div className={classes.DropCon}>
            <Dropdown />
            <Dropdown />
            <Dropdown />
          </div>
          <button className={classes.btn}>Predict</button>
        </div>
      )}
    </div>
  );
}
