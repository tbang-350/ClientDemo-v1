import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./PackageCTA.css";

const PackageCTA = () => {
  const navigate = useNavigate();

  const onFrameButtonClick = useCallback(() => {
    navigate("/travelquote");
  }, [navigate]);

  return (
    <div className="packagecta">
      <div className="packagecta-child" />
      <div className="make-your-dream-trip-come-true-parent">
        <h2 className="make-your-dream">{`MAKE YOUR DREAM TRIP COME TRUE WITH ISLES & SAVANNAH`}</h2>
        <div className="at-isles">{`At Isles & Savannah t, you can customize your trip. Our sample itineraries are adjustable to your preferences. Our specialists work together with you to create your dream journey!`}</div>
      </div>
      <div className="packagecta-inner">
        <button
          className="request-this-trip-wrapper"
          onClick={onFrameButtonClick}
        >
          <div className="request-this-trip">request this trip</div>
        </button>
      </div>
    </div>
  );
};

export default PackageCTA;
