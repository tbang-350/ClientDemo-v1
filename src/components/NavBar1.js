import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar1.css";

const NavBar1 = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutText1Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText1Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <header className="navbar1">
      <img
        className="logo-icon3"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <div className="navitems1">
        <div className="f-r-a-m-e-packages">
          <div className="packages1">Packages</div>
        </div>
        <div className="about-container">
          <div className="about3" onClick={onAboutText1Click}>
            About
          </div>
        </div>
        <div className="contact-container">
          <div className="contact5" onClick={onContactText1Click}>
            Contact
          </div>
        </div>
        <button className="ctabutton2" onClick={onCTAButtonClick}>
          <div className="customize-you-trip1">Customize you trip</div>
        </button>
      </div>
    </header>
  );
};

export default NavBar1;
