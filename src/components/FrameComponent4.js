import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./FrameComponent4.css";

const FrameComponent4 = () => {
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
    <section className="navbar-parent">
      <NavBar
        packagesFlex="unset"
        packagesHeight="5.5rem"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactText1Click={onContactTextClick}
        onCTAButtonClick={onCTAButtonClick}
      />
      <div className="travel-quote-wrapper">
        <h1 className="travel-quote">travel quote</h1>
      </div>
    </section>
  );
};

export default FrameComponent4;
