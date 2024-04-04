import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const onLogoClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutTextClick = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  const onContactText2Click = useCallback(() => {
    navigate("/contact");
  }, [navigate]);

  const onCTAButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  const onCTAButton2Click = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="contact1">
      <NavBar
        packagesFlex="unset"
        packagesHeight="5.5rem"
        onLogoClick={onLogoClick}
        onAboutTextClick={onAboutTextClick}
        onContactText1Click={onContactText2Click}
        onCTAButtonClick={onCTAButtonClick}
      />
      <section className="contact-inner">
        <div className="backgroundimage-parent">
          <img
            className="backgroundimage-icon1"
            alt=""
            src="/backgroundimage@2x.png"
          />
          <h1 className="contact2">contact</h1>
        </div>
      </section>
      <section className="contact-child">
        <div className="frame-parent4">
          <div className="first-name-input-parent">
            <div className="first-name-input">
              <h3 className="embark-on-the-container">
                <span className="e">e</span>
                <span className="mbark-on-the">
                  mbark on the ultimate Tanzanian adventure with us! As the
                  go-to tour specialist by land and by sea, we are committed to
                  providing unparalleled experiences that showcase the
                  breathtaking beauty and diverse landscapes of Tanzania.
                  Whether you're seeking thrilling wildlife safaris in the
                  Serengeti and Ngorongoro Crater or relaxing beach getaways in
                  Zanzibar, we have tailored packages to suit every traveler's
                  dream.
                </span>
              </h3>
              <div className="email-input">
                <img
                  className="email-input-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-17@2x.png"
                />
              </div>
              <div className="our-expert-team-ensures-seamle-wrapper">
                <h3 className="our-expert-team-container">
                  <span className="o">o</span>
                  <span className="ur-expert-team">
                    ur expert team ensures seamless journeys filled with
                    unforgettable moments, from encountering the Big Five on a
                    safari to snorkeling amidst vibrant coral reefs. With our
                    dedication to excellence and attention to detail, we
                    guarantee that your Tanzanian adventure will be nothing
                    short of extraordinary. Join us and let's explore the
                    wonders of Tanzania together!
                  </span>
                </h3>
              </div>
              <img
                className="first-name-input-child"
                loading="lazy"
                alt=""
                src="/rectangle-18@2x.png"
              />
            </div>
            <div className="first-name-input1">
              <div className="call-to-action-glyph-parent">
                <div className="call-to-action-glyph">
                  <h3 className="talk-to-an">Talk to An Expert :</h3>
                </div>
                <div className="frame-parent5">
                  <div className="frame-parent6">
                    <div className="first-name-parent">
                      <div className="first-name">first Name *</div>
                      <div className="firstnameinput-parent">
                        <div className="firstnameinput" />
                        <div className="background-image">
                          <div className="email">Email *</div>
                        </div>
                      </div>
                    </div>
                    <div className="last-name-parent">
                      <div className="last-name">Last Name *</div>
                      <input className="lastnmaeinput" type="text" />
                    </div>
                  </div>
                  <input className="emailinput" type="text" />
                </div>
                <div className="s-e-n-d-c-t-a-button-label">
                  <div className="by-signing-up-message">
                    <div className="frame-parent7">
                      <div className="frame-wrapper2">
                        <div className="phone-parent">
                          <div className="phone">Phone *</div>
                          <div className="phoneinput" />
                        </div>
                      </div>
                      <div className="message">Message *</div>
                    </div>
                    <div className="country-parent">
                      <div className="country">Country *</div>
                      <input className="countryinput" type="text" />
                    </div>
                  </div>
                  <textarea className="messagetextarea" rows={17} cols={34} />
                </div>
                <button className="send-wrapper">
                  <div className="send">SEND</div>
                </button>
              </div>
            </div>
          </div>
          <div className="footer-c-t-a-button">
            <button className="ctabutton" onClick={onCTAButton2Click}>
              <div className="request-a-quote1">Request a quote</div>
            </button>
          </div>
        </div>
      </section>
      <footer className="footer1">
        <div className="waitlist-sign-up-c-t-a-button-parent">
          <div className="waitlist-sign-up-c-t-a-button">
            <img
              className="logo-icon1"
              loading="lazy"
              alt=""
              src="/logo-1.svg"
            />
          </div>
          <div className="frame-parent8">
            <div className="frame-parent9">
              <div className="footer-copyright-parent">
                <div className="footer-copyright">
                  <img
                    className="call-undefined-glyph-unde1"
                    loading="lazy"
                    alt=""
                    src="/call--undefined--glyph-undefined.svg"
                  />
                </div>
                <div className="div1">+255 757 738 345</div>
              </div>
              <div className="isles-savannah-container">
                <div className="isles-savannah1">{`© 2024 Isles & Savannah.`}</div>
              </div>
            </div>
            <div className="travel-information-travel-advi-wrapper">
              <div className="travel-information-travel-advi">
                <div className="terms-and-condition1">Terms and Condition</div>
                <div className="privacy-policy2">Privacy Policy</div>
                <div className="contact3">Contact</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner1">
          <div className="frame-parent10">
            <div className="travel-information-container">
              <div className="travel-information4">
                <p className="travel-information5">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container2">
                <p className="travel-advice3">Travel Advice</p>
                <p className="yellow-fever-requirements2">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather2">Tanzania weather</p>
                <p className="when-to-visit2">When to visit Tanzania?</p>
                <p className="flying-doctors-services2">
                  Flying Doctors Services
                </p>
              </div>
            </div>
            <div className="travel-information-parent1">
              <div className="travel-information6">
                <p className="travel-information7">TRAVEL INFORMATION</p>
              </div>
              <div className="travel-advice-yellow-container3">
                <p className="travel-advice4">Travel Advice</p>
                <p className="yellow-fever-requirements3">
                  Yellow fever requirements
                </p>
                <p className="tanzania-weather3">Tanzania weather</p>
                <p className="when-to-visit3">When to visit Tanzania?</p>
                <p className="flying-doctors-services3">
                  Flying Doctors Services
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-inner2">
          <div className="frame-parent11">
            <div className="sign-up-for-our-waitlist-parent">
              <div className="sign-up-for1">sign up for our waitlist</div>
              <form className="frame-form">
                <div className="receive-travel-ideas-destinat-group">
                  <div className="receive-travel-ideas1">
                    Receive travel ideas, destination guides, and inspiration
                    directly in your inbox
                  </div>
                  <div className="frame-parent12">
                    <div className="rectangle-container">
                      <div className="frame-inner" />
                      <input
                        className="your-name1"
                        placeholder="your name"
                        type="text"
                      />
                    </div>
                    <div className="group-div">
                      <div className="rectangle-div" />
                      <input
                        className="your-email1"
                        placeholder="your Email"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="country-label">
                  <div className="by-signing-up-for-our-mailing-wrapper">
                    <div className="by-signing-up-container1">
                      By signing up for our mailing list, you agree to our 
                      <span className="privacy-policy3">privacy policy</span>
                    </div>
                  </div>
                  <button className="sign-up-container">
                    <div className="sign-up1">Sign up</div>
                  </button>
                </div>
              </form>
            </div>
            <div className="frame-wrapper3">
              <img
                className="group-icon"
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

export default Contact;
