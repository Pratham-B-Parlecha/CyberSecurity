import React from "react";
import classes from "./login.module.css";
import { CiUser } from "react-icons/ci";
import { IoLockClosedOutline } from "react-icons/io5";

export default function Login() {
  return (
    <div className={classes.loginCon}>
      <div className={classes.formWrapper}>
        <h1 className={classes.header}>Login</h1>
        <form className={classes.form}>
          <div className={classes.InputCon}>
            <CiUser className={classes.icon} />
            <input
              type="text"
              placeholder="Username"
              className={classes.input}
            />
          </div>
          <div className={classes.InputCon}>
            <IoLockClosedOutline className={classes.icon} />
            <input
              type="password"
              placeholder="Password"
              className={classes.input}
            />
          </div>

          <button type="button" className={classes.btn}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
