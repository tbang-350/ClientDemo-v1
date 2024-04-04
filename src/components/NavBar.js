import { useMemo } from "react";
import "./NavBar.css";

const NavBar = ({
  packagesFlex,
  packagesHeight,
  onLogoClick,
  onAboutTextClick,
  onContactText1Click,
  onCTAButtonClick,
}) => {
  const navBarStyle = useMemo(() => {
    return {
      flex: packagesFlex,
      height: packagesHeight,
    };
  }, [packagesFlex, packagesHeight]);

  return (
    <header className="navbar" style={navBarStyle}>
      <img
        className="logo-icon2"
        loading="lazy"
        alt=""
        src="/logo.svg"
        onClick={onLogoClick}
      />
      <nav className="navitems">
        <div className="logo-and-nav">
          <div className="packages">Packages</div>
        </div>
        <div className="about-wrapper">
          <div className="about2" onClick={onAboutTextClick}>
            About
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="contact4" onClick={onContactText1Click}>
            Contact
          </div>
        </div>
        <button className="ctabutton1" onClick={onCTAButtonClick}>
          <div className="customize-you-trip">Customize you trip</div>
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
