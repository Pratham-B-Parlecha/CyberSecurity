import React from "react";

import logo from "../../assets/logo.png";
import classes from "./navbar.module.css";
import { useNavigate } from "react-router-dom";

export default function LandingNavbar() {
  const navigate = useNavigate();
  function handleRoutes(value) {
    navigate(value);
  }
  return (
    <div className={classes.NavCon}>
      <div className={classes.logoCon}>
        <img src={logo} alt="logo" className={classes.Navimg} />
        <div className={classes.titleCon}>
          <h2 className={classes.header}>CRIMINAL INVESTIGATION DEPARTMENT</h2>
          <p className={classes.para}>Government of Karnataka</p>
        </div>
      </div>
      <div className={classes.btnActions}>
        <button className={classes.btn} onClick={() => handleRoutes('login')}>Log in</button>
        <button className={classes.btn} onClick={() => handleRoutes('signup')}>Sign Up</button>
      </div>
    </div>
  );
}
