import React from "react";
import "./checkbox.scss";

export default function Checkbox() {
  return (
    <label className="checkbox-wrapper">
      <input type="checkbox" className="guide-checkbox" />
      <span class="checkmark"></span>
    </label>
  );
}
