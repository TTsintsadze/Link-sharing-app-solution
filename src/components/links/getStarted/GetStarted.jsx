import React from "react";
import Styles from "./getStarted.module.css";
import illustration from "../../../assets/images/illustration-empty.svg";

export const GetStarted = () => {
  return (
    <div className={Styles.getStartedContainer}>
      <img className={Styles.illustration} src={illustration}></img>
      <h1 className={Styles.getStartedH1}>Let’s get you started</h1>
      <p className={Styles.getStartedP}>
        Use the “Add new link” button to get started. Once you have more than
        one link, you can reorder and edit them. We’re here to help you share
        your profiles with everyone!
      </p>
    </div>
  );
};
