import React, { useState } from "react";
import { useSelector } from "react-redux";
export default function Volume(props) {
  return (
    <div
      className={
        props.isOn === true ? "slider-container" : "slider-container on"
      }
      id="slPhone"
    >
      <div className="foot min">low</div>
      <div className="foot mid">medium</div>
      <div className="foot max">high</div>
      <div
        id="slPhoneFill"
        className="left"
        style={{
          width: `calc(${props.newValueRange}% + (${props.newPosition}px))`,
        }}
      />
      <div className="track" />
      <div
        id="slPhoneTip"
        className="slider-tip"
        style={{
          left: `calc(${props.newValueRange - 3}% + (${props.newPosition}px))`,
        }}
      >
        {props.range}
      </div>
      <input
        values={10}
        onChange={(e) => {
          props.setRange(e.target.value);
        }}
        type="range"
        min={10}
        max={100}
        defaultValue={10}
        step={1}
        className="slider"
        id="slSensiRange"
        style={{ pointerEvents: props.isOn === true ? "none" : "" }}
      />
    </div>
  );
}
