import React, { useState } from "react";
import Volume from "../Volume/Volume";
import { useDispatch, useSelector } from "react-redux";

import Title from "../Title/Title";
import Checkbox from "../CheckBox/Checkbox";

export default function BodyWigget(props) {
  const [showMic, setShowMic] = useState(true);
  const [sensitivity, setSensitivity] = useState(true);
  const [sideTone, setSideTone] = useState(true);
  const [normalization, setNormalization] = useState(true);
  const [noiseReduction, setNoiseReduction] = useState(true);
  const [voice, setVoice] = useState(true);

  const disPatch = useDispatch();
  //change range input
  const [range, setrange] = useState(10);
  const newValueRange = ((range - 10) * 100) / (100 - 10);
  const newPosition = 10 - newValueRange * 0.2;

  const [range1, setrange1] = useState(10);
  const newValueRange1 = ((range1 - 10) * 100) / (100 - 10);
  const newPosition1 = 10 - newValueRange1 * 0.2;

  const [range2, setrange2] = useState(10);
  const newValueRange2 = ((range2 - 10) * 100) / (100 - 10);
  const newPosition2 = 10 - newValueRange2 * 0.2;

  const [range3, setrange3] = useState(10);
  const newValueRange3 = ((range3 - 10) * 100) / (100 - 10);
  const newPosition3 = 10 - newValueRange3 * 0.2;

  const [range4, setrange4] = useState(10);
  const newValueRange4 = ((range4 - 10) * 100) / (100 - 10);
  const newPosition4 = 10 - newValueRange4 * 0.2;

  const [range5, setrange5] = useState(10);
  const newValueRange5 = ((range5 - 10) * 100) / (100 - 10);
  const newPosition5 = 10 - newValueRange5 * 0.2;

  return (
    <div className="body-widgets flex">
      <div className="widget-col col-left flex">
        <div className="widget" id="micPhone">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>

          <Title
            show={showMic}
            setShow={setShowMic}
            title="microphone"
            class="title"
          />

          <div className="h2-title">mic volume</div>

          <Volume
            isOn={showMic}
            range={range}
            setRange={setrange}
            newValueRange={newValueRange}
            newPosition={newPosition}
          />
          <Title
            show={sensitivity}
            setShow={setSensitivity}
            title="mic sensitivity"
            class="h2-title mt20"
          />
          <div className="h2-body">
            Adjust this setting to remove unwanted background noise or increase
            the amount of mic output heard
          </div>

          <Volume
            isOn={sensitivity}
            range={range1}
            setRange={setrange1}
            newValueRange={newValueRange1}
            newPosition={newPosition1}
          />
        </div>
      </div>
      <div className="widget-col col-right flex">
        <div className="widget" id="micSidetone">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
          <Title
            show={sideTone}
            setShow={setSideTone}
            title="sidetone"
            class="title"
          />

          <Volume
            isOn={sideTone}
            range={range2}
            setRange={setrange2}
            newValueRange={newValueRange2}
            newPosition={newPosition2}
          />
        </div>
        <div className="widget" id="micEnhance">
          <div className="help" />
          <div className="tip">
            I'm just a tooltip. I'm just a tooltip. I'm just a tooltip. I'm just
            a tooltip. I'm just a tooltip.
          </div>
          <Title
            show={sideTone}
            setShow={setSideTone}
            title="enhancements"
            class="title"
          />

          <Checkbox
            name="Volume Normalization"
            setShow={setNormalization}
            show={normalization}
            label="checkNorm"
            id="checkNorm"
          />
          <Volume
            isOn={normalization}
            range={range3}
            setRange={setrange3}
            newValueRange={newValueRange3}
            newPosition={newPosition3}
          />

          <Checkbox
            name="Ambient Noise Reduction"
            show={noiseReduction}
            setShow={setNoiseReduction}
            label="checkAmb"
            id="checkAmb"
          ></Checkbox>

          <Volume
            isOn={noiseReduction}
            range={range4}
            setRange={setrange4}
            newValueRange={newValueRange4}
            newPosition={newPosition4}
          />
          <Checkbox
            name="Voice Clarity"
            show={voice}
            setShow={setVoice}
            label="checkClarity"
            id="checkClarity"
          ></Checkbox>

          <Volume
            isOn={voice}
            range={range5}
            setRange={setrange5}
            newValueRange={newValueRange5}
            newPosition={newPosition5}
          />
        </div>
      </div>
    </div>
  );
}
