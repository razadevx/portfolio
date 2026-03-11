declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    clarity: (...args: any[]) => void;
  }
}

export const trackPageView = (url: string) => {
  if (typeof window.gtag === "function") {
    window.gtag("event", "page_view", {
      page_path: url,
    });
  }
};

export const initClarity = () => {
  if (typeof window === "undefined") return;

  (function (c: any, l: Document, a: string, r: string, i: string, t?: any, y?: any) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };

    t = l.createElement(r);
    t.async = true;
    t.src = "https://www.clarity.ms/tag/" + i;

    y = l.getElementsByTagName(r)[0];
    y.parentNode?.insertBefore(t, y);
  })(window, document, "clarity", "script", "vtv161xvxm");
};