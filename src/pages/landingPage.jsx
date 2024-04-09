import React from "react";
import LandingImg from "../components/Landing/LandingImg";
import LandingNavbar from "../components/Landing/LandingNavbar";
import LandingFooter from "../components/Landing/LandingFooter";
import classes from "../App.module.css";

export default function Landing() {
  return (
    <div className={classes.mainContainer}>
      <LandingNavbar />
      <LandingImg />
      <LandingFooter />
    </div>
  );
}
