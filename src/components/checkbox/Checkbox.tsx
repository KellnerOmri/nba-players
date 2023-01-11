import React from "react";
import "./Checkbox.css";
import { Props } from "./props.model";

export const Checkbox: React.FC<Props> = ({ isChecked = false, label, functionAction }) => {
  const updateCheckboxValue = () => {
    functionAction();
  };
  return (
    <div className="checkbox-wrapper">
      <input name="checkbox" className="checkbox-style" type="checkbox" checked={isChecked} onChange={updateCheckboxValue} />
      {label && <label htmlFor="checkbox">{label}</label>}
    </div>
  );
};
