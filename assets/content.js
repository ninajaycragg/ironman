/* ============================================================
   All the content lives here, in one place.
   Edit this file to swap articles, tracks, notes, the letter —
   every concept page reads from this object, so they stay in sync.
   ============================================================ */

window.GIFT = {
  meta: {
    forName: "Dad",
    fromName: "with love",          // signature on the letter / dispatch
    edition: "no. 87",              // playful nod to the "I think 87" text
    tagline: "A few things, gathered for you.",
  },

  /* ---------- THE FUTURE DISPATCH ----------
     ~230 words, grounded in verified Neuralink / Shivon Zilis facts.
     The reversal of the text thread: he sends her wonder; she sends it back. */
  dispatch: {
    kicker: "A dispatch, sent back to you",
    title: "From the Mind, Outward",
    standfirst: "You sent me a video once — a woman drawing again. Not with her hand. With the thought of her hand.",
    body: [
      "Her name is Audrey. She was sixteen when a car took the rest of it away, and she was thirty-six when she watched a cursor spell <em>Audrey</em> across a screen — for the first time in twenty years — because she wanted it to. <em>“I tried writing my name for the first time in 20 years,”</em> she wrote underneath. <em>“I’m working on it. Lol.”</em>",
      "There is a man named Alex, too. Three years without the use of his hands, and then a robotic arm reached where he reached and drew what he meant to draw. And Noland, who insists he isn’t artistic, quietly making a flower, a sun, a house — out of nothing but attention.",
      "The people building this say the point is to make it ordinary. Ten minutes. A small machine. One day close to the price of a watch — the way LASIK stopped being a miracle and became a Tuesday.",
      "You’re the one who taught me to look at the future like this. Not as machines. As the new things a mind can suddenly do.",
      "So here it is, sent back to you. Happy birthday. Keep sending me the good ones.",
    ],
    source: "Inspired by the work Shivon Zilis and Neuralink have shared. Every moment above is real.",
  },

  /* ---------- READING SHELF ----------
     7 real, publicly-readable essays, each with a note in her voice. */
  reads: [
    {
      vein: "Mind & Machines",
      title: "The Science of Mind Reading",
      author: "James Somers",
      source: "The New Yorker",
      year: "2021",
      url: "https://www.newyorker.com/magazine/2021/12/06/the-science-of-mind-reading",
      note: "The AI piece I wish everyone read instead of the loud ones — about reading thoughts, and what a mind actually is, told with the patience and wonder I always see in how you think.",
    },
    {
      vein: "Economics, from scratch",
      title: "The Use of Knowledge in Society",
      author: "Friedrich A. Hayek",
      source: "Econlib",
      year: "1945",
      url: "https://www.econlib.org/library/Essays/hykKnw.html",
      note: "The original argument that no single mind can hold what a whole society knows — eighty years old and still the most elegant case for humility I could find for you.",
    },
    {
      vein: "Stillness",
      title: "Nirvana, looked at closely",
      author: "Robert Wright",
      source: "Aeon",
      year: "2017",
      url: "https://aeon.co/essays/nirvana-can-seem-an-exotic-metaphysical-idea-until-you-look-closer",
      note: "The least mystical, most clear-eyed thing I’ve read on what meditation is actually pointing at — written for exactly the kind of curious skeptic who still sits down to practice.",
    },
    {
      vein: "Design & Craft",
      title: "Frank Lloyd Wright as a Mirror of the American Condition",
      author: "Aeon",
      source: "Aeon",
      year: "2026",
      url: "https://aeon.co/essays/frank-lloyd-wright-as-a-mirror-of-the-american-condition",
      note: "Wright believed beauty wasn’t ornament but nourishment — it’s the essay version of everything you love about wood, light, and a room that makes you feel at home.",
    },
    {
      vein: "The Long Way",
      title: "A Marathon, a Goal Time, the Sublime, and a Wolf",
      author: "Jeanne Mack",
      source: "Voltwomen",
      year: "2017",
      url: "https://medium.com/voltwomen/a-marathon-a-goal-time-the-sublime-and-a-wolf-b956c311555a",
      note: "She trains alone and misses her goal by twenty seconds — it’s about pressing against the edge of what you believe is possible. The most <em>you</em> thing I know. (Made me think of 7 × 7 × 7.)",
    },
    {
      vein: "Awe",
      title: "More Than a Feeling",
      author: "Sean B. Carroll",
      source: "Nautilus",
      year: "2025",
      url: "https://nautil.us/more-than-a-feeling-1242661/",
      note: "On awe and wonder as the actual engine of discovery — the feeling you chase on a ridgeline, taken seriously as a way of thinking. For the part of you that’s always looking up.",
    },
    {
      vein: "Deep Time",
      title: "The Big Here and Long Now",
      author: "Brian Eno",
      source: "The Long Now Foundation",
      year: "2000",
      url: "https://longnow.org/essays/big-here-long-now/",
      note: "The little essay that started the 10,000-year clock — about widening your sense of <em>now</em> until the present grows out of the whole past. Deep time for a man who thinks in mountains and decades.",
    },
  ],

  /* ---------- LISTENING CORNER ---------- */
  listening: {
    podcasts: [
      {
        show: "Lex Fridman Podcast · #438",
        title: "Neuralink & the Future of Humanity",
        who: "Musk, DJ Seo, Noland Arbaugh & team",
        note: "The definitive brain-interface deep-dive. The conversation behind the video you sent me.",
        url: "https://open.spotify.com/episode/1seRMg5Zdg5nBuw0W4Q3WB",
        embed: "https://open.spotify.com/embed/episode/1seRMg5Zdg5nBuw0W4Q3WB",
      },
      {
        show: "CUCAI · 2021",
        title: "The Future of Brain-Machine Interfaces",
        who: "Shivon Zilis",
        note: "Zilis herself, on where this is all headed.",
        url: "https://www.youtube.com/watch?v=CkUcCcRq_eM",
      },
      {
        show: "On Being with Krista Tippett",
        title: "Wondrous Doubt",
        who: "Stephen Batchelor",
        note: "Secular Buddhism, doubt, and astonishment as the roots of practice. For the questioning, not the dogma.",
        url: "https://onbeing.org/programs/stephen-batchelor-wondrous-doubt-mar2018/",
      },
      {
        show: "Ten Percent Happier",
        title: "The Joseph Goldstein Episode",
        who: "Joseph Goldstein",
        note: "Insight meditation and attention, from one of its clearest teachers.",
        url: "https://open.spotify.com/episode/3wHNqcf3CK1DCagzBiDSXZ",
      },
      {
        show: "The Rich Roll Podcast · #377",
        title: "The Athlete Mindset",
        who: "Chris Hauth",
        note: "Sub-9 Ironman and elite endurance coach on the architecture of going long. Made for you.",
        url: "https://richroll.com/podcast/chris-hauth-377/",
      },
    ],
    workout: {
      title: "Long Run, Deep Drive",
      subtitle: "A run mix from me — rolling start, two anthemic peaks, a strong close.",
      tracks: [
        ["Dog Days Are Over", "Florence + The Machine"],
        ["Lose Yourself", "Eminem"],
        ["Mr. Brightside", "The Killers"],
        ["Don’t Stop Me Now", "Queen"],
        ["Take On Me", "a-ha"],
        ["Time to Pretend", "MGMT"],
        ["Feel It Still", "Portugal. The Man"],
        ["Solsbury Hill", "Peter Gabriel"],
        ["Wake Me Up", "Avicii"],
        ["The Less I Know the Better", "Tame Impala"],
        ["Gold on the Ceiling", "The Black Keys"],
        ["Pumped Up Kicks", "Foster the People"],
        ["Born to Run", "Bruce Springsteen"],
        ["Closing Time", "Semisonic"],
      ],
      url: "https://open.spotify.com/search/Long%20Run%20Deep%20Drive",
    },
    windDown: {
      title: "Wind-Down",
      subtitle: "For the float after, or to sit with.",
      tracks: [
        ["On the Nature of Daylight", "Max Richter"],
        ["An Ending (Ascent)", "Brian Eno"],
        ["Spiegel im Spiegel", "Arvo Pärt"],
        ["from Sleep", "Max Richter"],
      ],
    },
  },
};
