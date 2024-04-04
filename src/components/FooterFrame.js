import "./FooterFrame.css";

const FooterFrame = () => {
  return (
    <footer className="footerframe">
      <div className="footer2">
        <div className="sign-up-form-parent">
          <div className="sign-up-form">
            <img className="logo-icon4" alt="" src="/logo-1.svg" />
          </div>
          <div className="phonenumber">
            <div className="call-button">
              <img
                className="call-undefined-glyph-unde2"
                loading="lazy"
                alt=""
                src="/call--undefined--glyph-undefined.svg"
              />
            </div>
            <div className="footer-info-wrapper">
              <div className="footer-info1">+255 757 738 345</div>
            </div>
          </div>
        </div>
        <div className="logo-brand-icon-company-logo">
          <div className="travel-information-parent2">
            <div className="travel-information10">
              <p className="travel-information11">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container4">
              <p className="travel-advice5">Travel Advice</p>
              <p className="yellow-fever-requirements4">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather4">Tanzania weather</p>
              <p className="when-to-visit4">When to visit Tanzania?</p>
              <p className="flying-doctors-services4">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="logo-brand-icon-company-logo1">
          <div className="travel-information-parent3">
            <div className="travel-information12">
              <p className="travel-information13">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container5">
              <p className="travel-advice6">Travel Advice</p>
              <p className="yellow-fever-requirements5">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather5">Tanzania weather</p>
              <p className="when-to-visit5">When to visit Tanzania?</p>
              <p className="flying-doctors-services5">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="sign-up-area">
          <div className="name-field">
            <div className="email-field">
              <div className="agree-terms">
                <div className="sign-up-for2">sign up for our waitlist</div>
                <div className="receive-travel-ideas2">
                  Receive travel ideas, destination guides, and inspiration
                  directly in your inbox
                </div>
              </div>
              <form className="mailing-list">
                <div className="frame">
                  <div className="name-email-pair">
                    <input
                      className="your-name2"
                      placeholder="your name"
                      type="text"
                    />
                  </div>
                  <div className="name-email-pair1">
                    <input
                      className="your-email2"
                      placeholder="your Email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="frame1">
                  <div className="frame2">
                    <div className="agree-to-terms">
                      <div className="by-signing-up-container2">
                        By signing up for our mailing list, you agree to our 
                        <span className="privacy-policy4">privacy policy</span>
                      </div>
                    </div>
                    <button className="sign-up-message">
                      <div className="sign-up2">Sign up</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="name-field-inner">
              <img
                className="frame-child12"
                loading="lazy"
                alt=""
                src="/group-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="isles-savannah-footer">
        <div className="terms-privacy-contact">
          <div className="isles-savannah2">{`© 2024 Isles & Savannah.`}</div>
          <div className="link-to-terms">
            <div className="terms-and-condition2">Terms and Condition</div>
            <div className="privacy-policy5">Privacy Policy</div>
            <div className="contact6">Contact</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFrame;
