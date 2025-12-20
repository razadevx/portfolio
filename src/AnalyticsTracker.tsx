import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (import.meta.env.MODE !== "development") {
      ReactGA.send({
        hitType: "pageview",
        page: location.pathname,
      });
    } else {
      console.log("GA4: Development mode - Pageview skipped for:", location.pathname);
    }
  }, [location.pathname]);

  return null;
};

export default AnalyticsTracker;