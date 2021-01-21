import React from "react";

export default function Title(props) {
  return (
    <div className={props.class}>
      {props.title}
      {props.title !== "enhancements" ? (
        <div
          onClick={(e) => {
            props.setShow(!props.show);
          }}
          className={
            props.show === true
              ? "switch switch-slider"
              : "switch switch-slider on"
          }
          id="swPhone"
        >
          <div className="handle"></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
