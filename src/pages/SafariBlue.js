import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar3 from "../components/NavBar3";
import FrameComponent7 from "../components/FrameComponent7";
import StackContainer from "../components/StackContainer";
import FooterFrame2 from "../components/FooterFrame2";
import "./SafariBlue.css";

const SafariBlue = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactTextClick = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="safariblue">
      <NavBar2
        frameDivMargin="0"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactTextClick={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <section className="safariblue-inner">
        <div className="safari-blue-wrapper">
          <h1 className="safari-blue">Safari Blue</h1>
        </div>
      </section>
      <FrameComponent7 />
      <StackContainer />
      <FooterFrame2
        propMarginLeft="-0.562rem"
        propDebugCommit="unset"
        propDebugCommit1="unset"
      />
    </div>
  );
};

export default SafariBlue;
