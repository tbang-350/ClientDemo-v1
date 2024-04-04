import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import "./GridContainer.css";

const GridContainer = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <section className="grid-container">
      <NavBar
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactText1Click={onContactText1Click}
        onCTAButtonClick={onCTAButtonClick}
      />
    </section>
  );
};

export default GridContainer;
