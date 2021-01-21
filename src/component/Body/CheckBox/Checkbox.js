import React from "react";

export default function Checkbox(props) {
  return (
    <div className="check-item">
      <input
        onClick={(e) => {
          props.setShow(!props.show);
        }}
        type="checkbox"
        id={props.id}
      />
      <label htmlFor={props.label} className="check-box">
        <div className="check-text">{props.name}</div>
      </label>
    </div>
  );
}
