import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import MatrixManipulator from "./MatrixManipulator";
import PackageCTA1 from "./PackageCTA1";
import "./StackContainer.css";

const StackContainer = () => {
  const navigate = useNavigate();

  const onSpacingManagerClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <section className="stack-container">
      <div className="flow-container">
        <div className="figma-component-parent">
          <div className="figma-component">
            <div className="variable-container">
              <h2 className="convenient-pickup-and1">
                Convenient Pickup and Briefing
              </h2>
            </div>
            <div className="image-layer-parent">
              <img
                className="image-layer-icon"
                loading="lazy"
                alt=""
                src="/rectangle-412@2x.png"
              />
              <img
                className="image-layer-icon1"
                loading="lazy"
                alt=""
                src="/rectangle-422@2x.png"
              />
            </div>
          </div>
          <div className="frame-parent72">
            <div className="your-safari-blue-adventure-beg-wrapper">
              <h3 className="your-safari-blue">
                Your Safari Blue adventure begins with a hassle-free pickup from
                the Stone Town Area in our spacious 6-seater van. A scenic
                24-kilometer drive takes you to Fumba, where our expert team
                provides a thorough 20-minute briefing, ensuring you're fully
                prepared for the day's adventures. We provide all essential
                gear, including life jackets, water shoes, and snorkeling
                goggles.
              </h3>
            </div>
            <MatrixManipulator
              day1LakeManyaraNationalPa="Sail to Menai Bay Conservation Area"
              rectangle41="/rectangle-433@2x.png"
              rectangle42="/rectangle-442@2x.png"
              propPadding="0rem 0rem var(--padding-lgi) var(--padding-12xs)"
              propPadding1="0rem var(--padding-xl)"
              propAlignSelf="stretch"
              propWidth="unset"
            />
            <div className="border">
              <h3 className="embark-on-a-container">
                <p className="embark-on-a1">
                  Embark on a traditional wooden dhow boat and sail from Fumba
                  to the Menai Bay Conservation Area. Enjoy a mini-vacation on
                  the water with breathtaking views of Zanzibar's coastline
                  during the
                </p>
                <p className="to-40-minute-boat">30 to 40-minute boat ride.</p>
                <p className="blank-line2">&nbsp;</p>
                <p className="menai-bay-conservation">
                  Menai Bay Conservation Area Activities:
                </p>
                <p className="dolphin-watching-witness">
                  - Dolphin Watching: Witness playful dolphins in their natural
                  habitat.
                </p>
                <p className="snorkeling-dive-into">{`- Snorkeling: Dive into crystal-clear waters to explore vibrant coral reefs and marine life. `}</p>
                <p className="sandbanks-relax-on">
                  - Sandbanks: Relax on pristine sandbanks surrounded by
                  turquoise waters.
                </p>
                <p className="swims-and-snacks">
                  - Swims and Snacks: Enjoy refreshing swims and tropical fruit
                  snacks.
                </p>
              </h3>
            </div>
            <div className="fill-color">
              <h2 className="kwale-island-and">
                Kwale Island and Seafood Platter:
              </h2>
            </div>
            <div className="shape-container">
              <img
                className="shape-container-child"
                loading="lazy"
                alt=""
                src="/rectangle-452@2x.png"
              />
              <img
                className="shape-container-item"
                loading="lazy"
                alt=""
                src="/rectangle-462@2x.png"
              />
            </div>
          </div>
          <div className="layout-manager">
            <h3 className="after-snorkeling-and-container">
              <p className="after-snorkeling-and">
                After snorkeling and relaxing on the sandbank, continue the
                journey to Kwale Island, where a delightful seafood platter
                awaits. Savor lunch amidst the natural beauty and embark on a
                brief tour
              </p>
              <p className="of-the-ancient">
                of the ancient baobab tree, believed to be over 200 years old.
                On the way back to Fumba Beach, take a refreshing swim in the
                natural lagoon near Kwale Island. Typically, the tour concludes
                around 4:30
              </p>
              <p className="pm">pm.</p>
            </h3>
          </div>
        </div>
        <PackageCTA1 onSpacingManagerClick={onSpacingManagerClick} />
      </div>
    </section>
  );
};

export default StackContainer;
