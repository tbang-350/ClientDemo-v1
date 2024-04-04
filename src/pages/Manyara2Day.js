import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import LogicGate from "../components/LogicGate";
import FrameComponent5 from "../components/FrameComponent5";
import MatrixManipulator from "../components/MatrixManipulator";
import PackageCTA1 from "../components/PackageCTA1";
import FooterFrame2 from "../components/FooterFrame2";
import "./Manyara2Day.css";

const Manyara2Day = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="manyara2day">
      <LogicGate />
      <section className="manyara2day-inner">
        <div className="frame-parent19">
          <FrameComponent5 />
          <div className="frame-wrapper7">
            <div className="tree-structure-parent">
              <div className="tree-structure">
                <MatrixManipulator
                  day1LakeManyaraNationalPa="Day 1: Lake Manyara National Park"
                  rectangle41="/rectangle-411@2x.png"
                  rectangle42="/rectangle-421@2x.png"
                />
                <div className="frame-parent20">
                  <div className="frame-wrapper8">
                    <div className="start-your-adventure-with-an-e-parent">
                      <h3 className="start-your-adventure-container">
                        <p className="start-your-adventure">
                          Start your adventure with an early breakfast and a
                          7:00 am pickup from your hotel. Head to Lake Manyara,
                          arriving by lunchtime. Enjoy a packed lunch before
                          embarking on an afternoon game drive
                        </p>
                        <p className="in-the-park">
                          in the park. Lake Manyara is home to vibrant baboons,
                          majestic elephants, and tree-climbing lions. Explore
                          diverse habitats, including groundwater forests with
                          towering trees like Trichilia roka, Croton
                          macrostachyus, Ficus sycomorus, and more. The park
                          boasts over 670 flowering plant and fern species,
                          making it a botanical treasure.
                        </p>
                      </h3>
                      <div className="day-2-ngorongoro-crater-wrapper">
                        <h2 className="day-2-ngorongoro">
                          Day 2: Ngorongoro Crater
                        </h2>
                      </div>
                    </div>
                  </div>
                  <div className="rectangle-parent4">
                    <img
                      className="frame-child8"
                      loading="lazy"
                      alt=""
                      src="/rectangle-431@2x.png"
                    />
                    <img
                      className="frame-child9"
                      loading="lazy"
                      alt=""
                      src="/rectangle-441@2x.png"
                    />
                  </div>
                </div>
                <div className="pattern-matcher">
                  <h3 className="prepare-for-a-container1">
                    <p className="prepare-for-a1">
                      Prepare for a full-day wildlife exploration in the iconic
                      Serengeti. As Tanzania's ancient and UNESCO World Heritage
                      Site, the Serengeti offers year-round wildlife encounters,
                      with the annual wildebeest
                    </p>
                    <p className="migration-being-a1">
                      migration being a highlight. Spend the night at Serengeti
                      National Park's full-service campsites, fully immersed in
                      the extraordinary landscape.
                    </p>
                  </h3>
                </div>
              </div>
              <PackageCTA1
                propAlignSelf="stretch"
                propFlexWrap="wrap"
                propPadding="var(--padding-8xl) var(--padding-10xl) var(--padding-16xl) var(--padding-19xl)"
                propFlex="unset"
                propMarginLeft="unset"
                propRight="0rem"
                propWidth="100%"
                onSpacingManagerClick={onFrameButtonClick}
              />
            </div>
          </div>
        </div>
      </section>
      <FooterFrame2 />
    </div>
  );
};

export default Manyara2Day;
