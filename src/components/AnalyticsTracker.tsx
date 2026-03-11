import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView, initClarity } from "../lib/analytics";

export default function AnalyticsTracker() {
  const location = useLocation();

  // Start Microsoft Clarity once
  useEffect(() => {
    initClarity();
  }, []);

  // Track page views with Google Analytics
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return null;
}