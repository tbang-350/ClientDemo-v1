import { useMemo } from "react";
import "./FrameComponent13.css";

const FrameComponent13 = ({ propWidth, propAlignSelf }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className="included-parent1" style={frameDivStyle}>
      <h2 className="included4">included</h2>
      <div className="frame-parent73">
        <div className="frame-parent74">
          <div className="instance-parent24">
            <img
              className="frame-child42"
              loading="lazy"
              alt=""
              src="/group-28.svg"
            />
            <div className="ground-transportation-in-a-rob-frame">
              <b className="ground-transportation-in3">
                Ground transportation in a robust 4×4 safari Jeep.
              </b>
            </div>
          </div>
          <div className="instance-parent25">
            <img className="frame-child43" alt="" src="/group-28.svg" />
            <b className="complimentary-mineral-water3">
              Complimentary Mineral water.
            </b>
          </div>
        </div>
        <div className="frame-parent75">
          <div className="frame-parent76">
            <div className="instance-wrapper3">
              <img className="frame-child44" alt="" src="/group-28.svg" />
            </div>
            <b className="overnight-stays-in">
              Overnight stays in safari tents
            </b>
          </div>
          <div className="frame-wrapper19">
            <div className="instance-parent26">
              <img className="frame-child45" alt="" src="/group-28.svg" />
              <b className="camping-equipment-tents2">
                Camping equipment (tents, sleeping mats, chairs, tables etc.)
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent13;
