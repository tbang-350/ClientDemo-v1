import NavBar2 from "../components/NavBar2";
import UserInterface from "../components/UserInterface";
import PackageCTA from "../components/PackageCTA";
import FooterFrame1 from "../components/FooterFrame1";
import "./Serengeti3Day.css";

const Serengeti3Day = () => {
  return (
    <div className="serengeti3day">
      <NavBar2 />
      <section className="sound-analyzer">
        <div className="network-manager">
          <h1 className="day-serengeti-camping">
            3-Day Serengeti Camping Tour
          </h1>
        </div>
      </section>
      <UserInterface />
      <section className="serengeti3day-inner">
        <div className="frame-parent14">
          <div className="frame-wrapper4">
            <div className="frame-parent15">
              <div className="frame-wrapper5">
                <div className="frame-parent16">
                  <div className="day-1-arusha-to-serengeti-nat-wrapper">
                    <h2 className="day-1-arusha">
                      Day 1: Arusha to Serengeti National Park
                    </h2>
                  </div>
                  <div className="rectangle-parent1">
                    <img
                      className="rectangle-icon"
                      loading="lazy"
                      alt=""
                      src="/rectangle-41@2x.png"
                    />
                    <img
                      className="frame-child3"
                      loading="lazy"
                      alt=""
                      src="/rectangle-42@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="frame-parent17">
                <div className="begin-your-morning-with-a-pick-wrapper">
                  <h3 className="begin-your-morning-container">
                    <p className="begin-your-morning">
                      Begin your morning with a pick-up from your accommodation
                      and head to the renowned Serengeti National Park, a
                      premier African wildlife destination. Traverse the
                      Ngorongoro Conservation Area,
                    </p>
                    <p className="experiencing-the-vastness">
                      experiencing the vastness and diversity of wildlife and
                      flora. Enjoy a game drive en route to the Serengeti,
                      immersing yourself in the landscape. Arrive in the
                      Serengeti for a half-day game drive,
                    </p>
                    <p className="staying-overnight-in">
                      staying overnight in comfortable full-service campsites
                      amid the wilderness.
                    </p>
                  </h3>
                </div>
                <div className="day-2-serengeti-national-park-wrapper">
                  <h2 className="day-2-serengeti">
                    Day 2: Serengeti National Park
                  </h2>
                </div>
                <div className="rectangle-parent2">
                  <img
                    className="frame-child4"
                    loading="lazy"
                    alt=""
                    src="/rectangle-43@2x.png"
                  />
                  <img
                    className="frame-child5"
                    loading="lazy"
                    alt=""
                    src="/rectangle-44@2x.png"
                  />
                </div>
              </div>
              <div className="prepare-for-a-full-day-wildlif-wrapper">
                <h3 className="prepare-for-a-container">
                  <p className="prepare-for-a">
                    Prepare for a full-day wildlife exploration in the iconic
                    Serengeti. As Tanzania's ancient and UNESCO World Heritage
                    Site, the Serengeti offers year-round wildlife encounters,
                    with the annual wildebeest
                  </p>
                  <p className="migration-being-a">
                    migration being a highlight. Spend the night at Serengeti
                    National Park's full-service campsites, fully immersed in
                    the extraordinary landscape.
                  </p>
                </h3>
              </div>
              <div className="frame-wrapper6">
                <div className="frame-parent18">
                  <div className="day-3-ngorongoro-crater-wrapper">
                    <h2 className="day-3-ngorongoro">
                      Day 3: Ngorongoro Crater
                    </h2>
                  </div>
                  <div className="rectangle-parent3">
                    <img
                      className="frame-child6"
                      loading="lazy"
                      alt=""
                      src="/rectangle-45@2x.png"
                    />
                    <img
                      className="frame-child7"
                      loading="lazy"
                      alt=""
                      src="/rectangle-46@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="set-off-on-a-full-day-wildlife-wrapper">
                <h3 className="set-off-on-container">
                  <p className="set-off-on">
                    Set off on a full-day wildlife expedition in the
                    awe-inspiring Ngorongoro Crater, a UNESCO World Heritage
                    site. Experience the harmonious coexistence of humans and
                    wild animals in this natural
                  </p>
                  <p className="wonder-in-the">
                    wonder. In the late afternoon, journey back to Arusha,
                    concluding your remarkable safari adventure filled with
                    extraordinary encounters and the unique beauty of the
                    Ngorongoro Crater.
                  </p>
                </h3>
              </div>
            </div>
          </div>
          <PackageCTA />
        </div>
      </section>
      <FooterFrame1 />
    </div>
  );
};

export default Serengeti3Day;
