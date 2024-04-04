import { useMemo } from "react";
import "./FooterFrame2.css";

const FooterFrame2 = ({
  propMarginLeft,
  propDebugCommit,
  propDebugCommit1,
}) => {
  const footerFrameStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const signUpForStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit,
    };
  }, [propDebugCommit]);

  const receiveTravelIdeasStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  return (
    <footer className="footerframe2" style={footerFrameStyle}>
      <div className="footer5">
        <div className="frame-parent50">
          <div className="logo-container">
            <img className="logo-icon8" alt="" src="/logo-1.svg" />
          </div>
          <div className="phonenumber2">
            <div className="call-undefined-glyph-unde-frame">
              <img
                className="call-undefined-glyph-unde5"
                loading="lazy"
                alt=""
                src="/call--undefined--glyph-undefined.svg"
              />
            </div>
            <div className="wrapper">
              <div className="div3">+255 757 738 345</div>
            </div>
          </div>
        </div>
        <div className="footer-inner4">
          <div className="travel-information-parent8">
            <div className="travel-information22">
              <p className="travel-information23">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container10">
              <p className="travel-advice11">Travel Advice</p>
              <p className="yellow-fever-requirements10">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather10">Tanzania weather</p>
              <p className="when-to-visit10">When to visit Tanzania?</p>
              <p className="flying-doctors-services10">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="footer-inner5">
          <div className="travel-information-parent9">
            <div className="travel-information24">
              <p className="travel-information25">TRAVEL INFORMATION</p>
            </div>
            <div className="travel-advice-yellow-container11">
              <p className="travel-advice12">Travel Advice</p>
              <p className="yellow-fever-requirements11">
                Yellow fever requirements
              </p>
              <p className="tanzania-weather11">Tanzania weather</p>
              <p className="when-to-visit11">When to visit Tanzania?</p>
              <p className="flying-doctors-services11">
                Flying Doctors Services
              </p>
            </div>
          </div>
        </div>
        <div className="footer-inner6">
          <div className="frame-parent51">
            <div className="frame-parent52">
              <div className="frame4">
                <div className="sign-up-for5" style={signUpForStyle}>
                  sign up for our waitlist
                </div>
                <div
                  className="receive-travel-ideas5"
                  style={receiveTravelIdeasStyle}
                >
                  Receive travel ideas, destination guides, and inspiration
                  directly in your inbox
                </div>
              </div>
              <form className="frame5">
                <div className="frame6">
                  <div className="your-name-container">
                    <input
                      className="your-name5"
                      placeholder="your name"
                      type="text"
                    />
                  </div>
                  <div className="your-email-container">
                    <input
                      className="your-email5"
                      placeholder="your Email"
                      type="text"
                    />
                  </div>
                </div>
                <div className="frame7">
                  <div className="frame8">
                    <div className="by-signing-up-for-our-mailing-container">
                      <div className="by-signing-up-container5">
                        By signing up for our mailing list, you agree to our 
                        <span className="privacy-policy10">privacy policy</span>
                      </div>
                    </div>
                    <button className="sign-up-frame">
                      <div className="sign-up5">Sign up</div>
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="frame-wrapper13">
              <img
                className="frame-child22"
                loading="lazy"
                alt=""
                src="/group-12.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="footerframe-inner">
        <div className="isles-savannah-parent">
          <div className="isles-savannah5">{`© 2024 Isles & Savannah.`}</div>
          <div className="terms-and-condition-group">
            <div className="terms-and-condition5">Terms and Condition</div>
            <div className="privacy-policy11">Privacy Policy</div>
            <div className="contact10">Contact</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFrame2;
