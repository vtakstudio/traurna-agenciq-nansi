import { ESTUDIO_OFFER_URL } from "./estudio-offer-data.js";

const DETECTED_API_ROUTES = [

];

const ESTUDIO_CTA_HTML = ESTUDIO_OFFER_URL ? `
<a class="estudio-demo-cta" href="${ESTUDIO_OFFER_URL}" aria-label="Виж офертата">
  <span class="estudio-demo-cta__mark" aria-hidden="true">
    <svg viewBox="150 150 840 700" focusable="false">
      <path d="M525.707 819C456.376 819 395.614 805.392 343.421 778.177C292.007 750.185 251.889 712.083 223.066 663.874C195.022 615.664 181 560.845 181 499.417C181 437.211 194.632 382.392 221.897 334.96C249.941 286.75 288.112 249.038 336.41 221.823C385.487 194.608 441.186 181 503.505 181C564.267 181 618.408 194.219 665.927 220.656C713.446 247.094 750.838 284.417 778.103 332.627C805.368 380.837 819 437.6 819 502.916C819 509.137 818.61 516.135 817.831 523.91C817.831 531.686 817.442 539.073 816.663 546.071H296.681V449.263H739.542L682.286 479.589C683.065 443.82 675.664 412.328 660.084 385.113C644.504 357.898 623.082 336.515 595.817 320.963C569.331 305.412 538.56 297.636 503.505 297.636C467.672 297.636 436.122 305.412 408.857 320.963C382.371 336.515 361.338 358.287 345.758 386.28C330.957 413.495 323.557 445.764 323.557 483.088V506.415C323.557 543.739 332.126 576.785 349.264 605.556C366.402 634.326 390.551 656.487 421.711 672.038C452.871 687.59 488.705 695.366 529.212 695.366C564.267 695.366 595.817 689.923 623.861 679.037C651.905 668.151 676.833 651.044 698.645 627.717L776.934 717.527C748.89 750.185 713.446 775.456 670.601 793.34C628.535 810.447 580.237 819 525.707 819Z" fill="white"/>
      <path d="M888.755 801.211C869.473 801.211 853.027 794.689 839.416 781.645C825.805 768.035 819 751.021 819 730.605C819 709.055 825.805 692.042 839.416 679.565C853.027 666.522 869.473 660 888.755 660C908.036 660 924.483 666.522 938.093 679.565C951.704 692.042 958.509 709.055 958.509 730.605C958.509 751.021 951.704 768.035 938.093 781.645C924.483 794.689 908.036 801.211 888.755 801.211Z" fill="#06A8FE"/>
    </svg>
  </span>
  <span class="estudio-demo-cta__text">Виж офертата</span>
</a>
<style>
  .estudio-demo-cta {
    position: fixed;
    right: max(18px, env(safe-area-inset-right));
    bottom: max(18px, env(safe-area-inset-bottom));
    z-index: 2147483647;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 11px;
    min-height: 52px;
    padding: 0 21px 0 15px;
    border-radius: 999px;
    border: 2px solid rgba(255, 255, 255, 0.9);
    background: linear-gradient(180deg, #191919 0%, #050505 100%);
    color: #ffffff;
    font: 700 15px/1.1 system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    letter-spacing: 0;
    text-decoration: none;
    box-shadow:
      0 0 0 1px rgba(0, 0, 0, 0.12),
      0 14px 36px rgba(0, 0, 0, 0.30);
    transition:
      transform 160ms ease,
      box-shadow 160ms ease,
      background 160ms ease,
      border-color 160ms ease;
    -webkit-tap-highlight-color: transparent;
  }

  .estudio-demo-cta__mark {
    display: grid;
    place-items: center;
    width: 30px;
    height: 26px;
    flex: 0 0 30px;
    transform: translateY(0.5px);
  }

  .estudio-demo-cta__mark svg {
    display: block;
    width: 30px;
    height: 25px;
  }

  .estudio-demo-cta__text {
    display: block;
    transform: translateY(-0.5px);
    white-space: nowrap;
  }

  .estudio-demo-cta:hover {
    border-color: #ffffff;
    background: linear-gradient(180deg, #242424 0%, #060606 100%);
    box-shadow:
      0 0 0 4px rgba(255, 255, 255, 0.18),
      0 18px 42px rgba(0, 0, 0, 0.34);
    transform: translateY(-2px);
  }

  .estudio-demo-cta:active {
    box-shadow:
      0 0 0 2px rgba(255, 255, 255, 0.16),
      0 8px 22px rgba(0, 0, 0, 0.28);
    transform: translateY(0) scale(0.985);
  }

  .estudio-demo-cta:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.8);
    outline-offset: 3px;
  }

  @media (max-width: 640px) {
    .estudio-demo-cta {
      right: max(12px, env(safe-area-inset-right));
      bottom: max(72px, 8vh, env(safe-area-inset-bottom));
      min-height: 48px;
      gap: 9px;
      padding: 0 18px 0 13px;
      font-size: 14px;
    }
  }
</style>
` : "";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/api/")) {
      return handleApi(request, url);
    }

    const response = await env.ASSETS.fetch(request);
    return injectOfferCta(request, response);
  },
};

async function injectOfferCta(request, response) {
  if (!ESTUDIO_CTA_HTML || request.method !== "GET") return response;

  const contentType = response.headers.get("content-type") || "";
  if (!contentType.toLowerCase().includes("text/html")) return response;

  const html = await response.text();
  const bodyOpen = /<body[^>]*>/i;
  const bodyClose = /<\/body\s*>/i;
  const nextHtml = bodyOpen.test(html)
    ? html.replace(bodyOpen, (match) => match + ESTUDIO_CTA_HTML)
    : bodyClose.test(html)
      ? html.replace(bodyClose, ESTUDIO_CTA_HTML + "$&")
    : html + ESTUDIO_CTA_HTML;

  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(nextHtml, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function handleApi(request, url) {
  return Response.json({
    ok: false,
    error: "api_route_not_ported",
    message: "This demo has detected API routes, but they still need to be ported from the source platform to Cloudflare Workers.",
    method: request.method,
    path: url.pathname,
    detected_api_routes: DETECTED_API_ROUTES,
  }, { status: 501 });
}
