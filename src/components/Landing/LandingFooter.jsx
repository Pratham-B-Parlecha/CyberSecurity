import React from "react";
import classes from "./landingFooter.module.css";
import madeInIndia from "../../assets/madInIndia.png";

export default function LandingFooter() {
  return (
    <div className={classes.footerCon}>
      <h2 className={classes.header}>
        END-TO-END CYBERSECURITY FOR YOUR ORGANIZATION
      </h2>
      <img src={madeInIndia} alt="madeInIndia" className={classes.sealImg} />
    </div>
  );
}
