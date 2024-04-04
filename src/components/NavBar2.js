import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./NavBar2.css";

const NavBar2 = () => {
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
    <header className="navbar2">
      <img
        className="logo-icon6"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <nav className="navitems2">
        <div className="error-handler">
          <div className="packages2">Packages</div>
        </div>
        <div className="error-handler1">
          <div className="about4" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className="error-handler2">
          <div className="contact8" onClick={onContactTextClick}>
            Contact
          </div>
        </div>
        <button className="ctabutton5" onClick={onCTAButtonClick}>
          <div className="customize-you-trip2">Customize you trip</div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar2;
