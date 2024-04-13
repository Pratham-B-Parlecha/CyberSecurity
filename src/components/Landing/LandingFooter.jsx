import React from "react";
import classes from "./landingFooter.module.css";
import footer from "../../assets/footer.png";

export default function LandingFooter() {
  return (
    <div className={classes.footerCon}>
      <img src={footer} alt="footer" className={classes.footerImg} />
    </div>
  );
}
