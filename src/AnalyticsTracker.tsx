import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }, [location]);

  return null;
};

useEffect(() => {
  if (import.meta.env.MODE !== "development") {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname,
    });
  }
}, [location.pathname]);

export default AnalyticsTracker;
