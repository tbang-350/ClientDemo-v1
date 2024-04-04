import { useCallback } from "react";
import GridContainer from "../components/GridContainer";
import SecondSection from "../components/SecondSection";
import CarouselContainer from "../components/CarouselContainer";
import TestimonialContainer from "../components/TestimonialContainer";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

const Homepage = () => {
  const navigate = useNavigate();

  const onRequestATourQuoteClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="homepage">
      <div className="homepage-child" />
      <div className="homepage-item" />
      <GridContainer />
      <img className="homepage-inner" alt="" src="/ellipse-1@2x.png" />
      <img
        className="backgroundimage-icon"
        alt=""
        src="/backgroundimage@2x.png"
      />
      <div className="frame-div">
        <div className="frame-wrapper">
          <div className="frame-parent">
            <div className="karibu-isles-savannah-wrapper">
              <h1 className="karibu-isles">{`Karibu Isles & Savannah`}</h1>
            </div>
            <div className="opacity">
              <div className="embark-on-a">
                Embark on a journey crafted uniquely for you
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="layout-grids">
        <button className="constraints">
          <div className="build-your-safari">Build your safari</div>
        </button>
      </div>
      <SecondSection />
      <CarouselContainer />
      <TestimonialContainer />
      <section className="bookinglinkcontainer">
        <button
          className="request-a-tour-quote"
          onClick={onRequestATourQuoteClick}
        >
          <div className="request-a-quote">request a quote</div>
        </button>
      </section>
      <footer className="footer">
        <div className="frame-group">
          <div className="logo-wrapper">
            <img
              className="logo-icon"
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
          </div>
          <div className="frame-container">
            <div className="frame-parent1">
              <div className="travel-advice-parent">
                <div className="travel-advice">
                  <img
                    className="call-undefined-glyph-unde"
                    loading="lazy"
                    alt=""
                    src="/call--undefined--glyph-undefined.svg"
                  />
                </div>
                <div className="div">+255 757 738 345</div>
              </div>
              <div className="isles-savannah-wrapper">
                <div className="isles-savannah">{`© 2024 Isles & Savannah.`}</div>
              </div>
            </div>
            <div className="frame-wrapper1">
              <div className="terms-and-condition-parent">
                <div className="terms-and-condition">Terms and Condition</div>
                <div className="privacy-policy">Privacy Policy</div>
                <div className="contact">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner">
          <div className="frame-parent2">
            <div className="travel-information-parent">
              <div className="travel-information">
                <p className="travel-information1">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container">
                <p className="travel-advice1">Travel Advice</p>
                <p className="yellow-fever-requirements">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather">Tanzania weather</p>
                <p className="when-to-visit">When to visit Tanzania?</p>
                <p className="flying-doctors-services">
                  Flying Doctors Services
                </p>
              </div>
            </div>
            <div className="travel-information-group">
              <div className="travel-information2">
                <p className="travel-information3">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container1">
                <p className="travel-advice2">Travel Advice</p>
                <p className="yellow-fever-requirements1">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather1">Tanzania weather</p>
                <p className="when-to-visit1">When to visit Tanzania?</p>
                <p className="flying-doctors-services1">
                  Flying Doctors Services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-child">
          <div className="progress-bar-parent">
            <div className="progress-bar">
              <div className="sign-up-for">sign up for our waitlist</div>
              <form className="mailing-list-signup">
                <div className="receive-travel-ideas-destinat-parent">
                  <div className="receive-travel-ideas">
                    Receive travel ideas, destination guides, and inspiration
                    directly in your inbox
                  </div>
                  <div className="frame-parent3">
                    <div className="rectangle-parent">
                      <div className="frame-child" />
                      <input
                        className="your-name"
                        placeholder="your name"
                        type="text"
                      />
                    </div>
                    <div className="rectangle-group">
                      <div className="frame-item" />
                      <input
                        className="your-email"
                        placeholder="your Email"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="image-gallery">
                  <div className="perperson">
                    <div className="by-signing-up-container">
                      By signing up for our mailing list, you agree to our 
                      <span className="privacy-policy1">privacy policy</span>
                    </div>
                  </div>
                  <button className="sign-up-wrapper">
                    <div className="sign-up">Sign up</div>
                  </button>
                </div>
              </form>
            </div>
            <div className="columns">
              <img
                className="columns-child"
                loading="lazy"
                alt=""
                src="/group-12.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
