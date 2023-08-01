/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const Button = ({ property1, className, createAnAccountClassName, text = "Create an account" }) => {
  return (
    <div className={`button ${property1} ${className}`}>
      <div className={`create-an-account ${createAnAccountClassName}`}>{text}</div>
    </div>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["button-disabled", "button-secondary", "button-primary"]),
  text: PropTypes.string,
};
