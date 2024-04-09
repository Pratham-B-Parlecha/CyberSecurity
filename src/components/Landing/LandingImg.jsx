import React from "react";
import classes from './landingImg.module.css';
import landingLogo from "../../assets/landing.png";

export default function LandingImg() {
  return (
    <div className={classes.imgCon}>
      <img src={landingLogo} alt="landing" className={classes.landingImg} />
    </div>
  );
}
