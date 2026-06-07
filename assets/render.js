/* Shared content renderer for the aesthetic studies.
   Each look provides a skeleton with these hooks; this fills them
   with identical content so only the art direction varies.
   Hooks: [data-d="kick|title|stand|body|src"], #reads, #pods, #mix, #wind */
(function () {
  function fill(sel, txt) { var e = document.querySelector(sel); if (e) e.textContent = txt; }
  function html(sel, h) { var e = document.querySelector(sel); if (e) e.innerHTML = h; }

  window.renderGift = function (opts) {
    opts = opts || {};
    var G = window.GIFT, ICON = window.PLAY_ICON || "";

    // dispatch
    var d = G.dispatch;
    fill('[data-d="kick"]', d.kicker);
    fill('[data-d="title"]', d.title);
    fill('[data-d="stand"]', d.standfirst);
    html('[data-d="body"]', d.body.map(function (p) { return '<p>' + p + '</p>'; }).join(""));
    fill('[data-d="src"]', d.source);

    // reading
    var reads = document.getElementById("reads");
    if (reads) {
      reads.innerHTML = G.reads.map(function (r, i) {
        return '<a class="item read reveal" data-delay="' + (i * 55) + '" href="' + r.url + '" target="_blank" rel="noopener">' +
          '<span class="vein">' + r.vein + '</span>' +
          '<span class="rbody">' +
            '<span class="ttl">' + r.title + '</span>' +
            '<span class="by">' + r.author + ' · ' + r.source + ' · ' + r.year + '</span>' +
            '<span class="note">“' + r.note + '”</span>' +
          '</span>' +
          '<span class="more">Read →</span>' +
        '</a>';
      }).join("");
    }

    // podcasts
    var pods = document.getElementById("pods");
    if (pods) {
      pods.innerHTML = G.listening.podcasts.map(function (p, i) {
        return '<a class="item pod reveal" data-delay="' + (i * 55) + '" href="' + p.url + '" target="_blank" rel="noopener">' +
          '<span class="pbody">' +
            '<span class="show">' + p.show + '</span>' +
            '<span class="pt">' + p.title + '</span>' +
            '<span class="who">' + p.who + '</span>' +
            '<span class="note">' + p.note + '</span>' +
          '</span>' +
          '<span class="play">' + ICON + '</span>' +
        '</a>';
      }).join("");
    }

    // mix
    var mix = document.getElementById("mix");
    if (mix) {
      var w = G.listening.workout;
      var n = opts.mixLimit || w.tracks.length;
      mix.innerHTML = '<h3>' + w.title + '</h3><p class="ms">' + w.subtitle + '</p>' +
        '<ol class="tracks">' + w.tracks.slice(0, n).map(function (t) {
          return '<li><span class="tn">' + t[0] + '</span><span class="ta">' + t[1] + '</span></li>';
        }).join("") + '</ol>' +
        '<a class="chip play-mix" href="' + w.url + '" target="_blank" rel="noopener">' + ICON + 'Open the mix</a>';
    }

    // wind-down (optional)
    var wind = document.getElementById("wind");
    if (wind) {
      var wd = G.listening.windDown;
      wind.innerHTML = '<h3>' + wd.title + '</h3><p class="ms">' + wd.subtitle + '</p>' +
        '<ol class="tracks">' + wd.tracks.map(function (t) {
          return '<li><span class="tn">' + t[0] + '</span><span class="ta">' + t[1] + '</span></li>';
        }).join("") + '</ol>';
    }

    if (window.__initReveals) window.__initReveals();
  };
})();
