import { ZapIcon } from "lucide-react";
import "./RateLimitedUI.css";

const RateLimitedUI = () => {
  return (
    <div className="rate-limit-container">
      <div className="rate-limit-card">
        <div className="rate-limit-content">
          <div className="icon-wrapper">
            <ZapIcon className="icon" />
          </div>
          <div className="text-content">
            <h3 className="title">Rate Limit Reached</h3>
            <p className="description">
              You've made too many requests in a short period. Please wait a moment.
            </p>
            <p className="sub-description">
              Try again in a few seconds for the best experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimitedUI;