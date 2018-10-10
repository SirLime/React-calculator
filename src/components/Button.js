import React from "react";

const isOperator = value => {
  return !isNaN(value) || value === ".";
};

export const Button = props => (
  <div
    className={`${isOperator(props.children) ? "button" : "operator button"}
      ${props.name}`}
    onClick={() => props.handleClick(props.children)}
  >
    {props.children}
  </div>
);
