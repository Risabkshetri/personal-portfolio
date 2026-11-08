"use client";

import { useEffect } from "react";
import { site } from "../lib/site";

const NS = "1-1-with-rishab-chhetri";
const ORIGIN = "https://app.cal.com";

// Cal.com's standard embed loader (from their embed code).
function loadCal() {
  if (window.Cal) return;
  (function (C, A, L) {
    const p = (a, ar) => a.q.push(ar);
    const d = C.document;
    C.Cal =
      C.Cal ||
      function () {
        const cal = C.Cal;
        const ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () {
            p(api, arguments);
          };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
  })(window, `${ORIGIN}/embed/embed.js`, "init");
}

// A button that opens Cal.com's own booking popup. Cal's embed script picks up
// the data-cal-* attributes, so there is no custom modal here.
export default function BookCall({ className = "", children = "Schedule a consultation" }) {
  useEffect(() => {
    loadCal();
    window.Cal("init", NS, { origin: ORIGIN });
    window.Cal.ns[NS]("ui", { hideEventTypeDetails: false, layout: "month_view" });
  }, []);

  return (
    <button
      type="button"
      className={className}
      data-cal-namespace={NS}
      data-cal-link={site.booking.slug}
      data-cal-config='{"layout":"month_view"}'
    >
      {children}
    </button>
  );
}
