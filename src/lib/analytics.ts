declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export const trackPageView = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};