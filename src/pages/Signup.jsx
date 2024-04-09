import React from "react";
import classes from "./signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";
import { IoIosMail } from "react-icons/io";

export default function Signup() {
  return (
    <div className={classes.signupCon}>
      <div className={classes.signupWrapper}>
        <h1 className={classes.header}>Sign Up</h1>
        <form className={classes.form}>
          <div className={classes.InputCon}>
            <CiUser className={classes.icon} />
            <input
              type="text"
              placeholder="Enter your name"
              className={classes.input}
            />
          </div>
          <div className={classes.InputCon}>
            <IoIosMail className={classes.icon} />
            <input
              type="email"
              placeholder="Enter your email-id"
              className={`${classes.input}`}
            />
          </div>
          <div className={classes.InputCon}>
          <MdLocalPhone className={classes.icon} />
            <input
              type="text"
              maxLength="10"
              min="1"
              placeholder="phone number"
              className={classes.input}
            />
          </div>
          <div className={classes.InputCon}>
            <IoLockClosedOutline className={classes.icon} />
            <input
              type="password"
              placeholder="create a strong password"
              maxLength="6"
              className={classes.input}
            />
          </div>
          <button type="button" className={classes.btn}>
            Sign Up
          </button>
        </form>
        <div className={classes.other}>
          <hr className={classes.hr} />
          <span className={classes.orClass}>OR</span>
          <hr className={classes.hr} />
        </div>
        <button className={classes.button}>
          <p className={classes.btnPara}>Continue with Google</p>
          <FcGoogle className={classes.svg} />
        </button>
      </div>
    </div>
  );
}
