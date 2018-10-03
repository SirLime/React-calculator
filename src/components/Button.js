import React from "react";
import "./Button.css";

const isOperator = value => {
  return !isNaN(value) || value === "." || value === "=";
};

export const Button = props => (
  <button
    className={`${isOperator(props.children) ? null : "operator"}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </button>
);
