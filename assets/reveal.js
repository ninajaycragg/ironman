/* Shared, tiny behaviors. Calm by default. */
(function () {
  // Inject the paper-grain SVG overlay once, on every page.
  function grain() {
    if (document.querySelector(".grain")) return;
    if (document.body.classList.contains("no-grain")) return;
    var ns = "http://www.w3.org/2000/svg";
    var svg = document.createElementNS(ns, "svg");
    svg.setAttribute("class", "grain");
    svg.setAttribute("aria-hidden", "true");
    svg.innerHTML =
      '<filter id="paper"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>' +
      '<feColorMatrix type="saturate" values="0"/></filter>' +
      '<rect width="100%" height="100%" filter="url(#paper)"/>';
    document.body.appendChild(svg);
  }

  // Reveal-on-scroll with a gentle stagger between siblings.
  function reveals() {
    var els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window) || !els.length) {
      els.forEach(function (e) { e.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var delay = parseFloat(el.getAttribute("data-delay") || 0);
        setTimeout(function () { el.classList.add("in"); }, delay);
        io.unobserve(el);
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (e) { io.observe(e); });
  }

  window.PLAY_ICON =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';

  // Stagger helper: add data-delay to a NodeList in steps of `step` ms.
  window.stagger = function (nodes, step) {
    step = step || 90;
    Array.prototype.forEach.call(nodes, function (n, i) {
      n.setAttribute("data-delay", i * step);
    });
  };

  document.addEventListener("DOMContentLoaded", function () {
    grain();
    // allow pages to render their content first
    requestAnimationFrame(reveals);
    window.__initReveals = reveals; // pages can re-run after dynamic render
  });
})();
