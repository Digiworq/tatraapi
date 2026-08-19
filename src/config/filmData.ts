// Tatraapi Film Master Narrative Configuration
// Ground Truth & Zero Hallucination Standard

export interface StoryChapter {
  num: string;
  title: string;
  tag: string;
  subtitle: string;
  content: string;
  imageryNote: string;
  imagePath: string;
}

export interface Character {
  id: string;
  name: string;
  role: string;
  description: string;
  relation: string;
  visualAtmosphere: string;
  keywords: string[];
}

export interface LocationItem {
  city: string;
  role: string;
  description: string;
  coordinates: string;
  atmosphere: string;
  imagePath: string;
}

export interface ComparableFilm {
  title: string;
  year?: string;
  resonance: string;
  imagePath: string;
}

export const FILM_CONFIG = {
  title: "TATRAAPI",
  devanagariTitle: "तत्रापि",
  status: "A Feature Film in Active Development",
  production: "Tatraapi Films, LLC",
  tagline: "Why does Krishna steal butter if he is God?",
  copyright: "© 2026 Tatraapi Films, LLC. All Rights Reserved.",
  confidentialityNotice: "Festival & Industry Preview. Strictly Confidential.",
  contactEmail: "contact@tatraapifilms.com",
  websiteUrl: "https://www.tatraapifilms.com",
  websiteDisplay: "www.tatraapifilms.com",

  genre: "Spiritual Drama",
  genreDescription:
    "A cerebral, deeply felt drama at the crossroads of ancient Indian scripture and modern robotics — exploring faith, family silence, and the questions we never outgrow.",

  centralQuestion: {
    question: "Why does Krishna steal butter if he is God?",
    devanagari: "कृष्ण माखन क्यों चुराते हैं यदि वे ईश्वर हैं?",
    climaxWord: "WHY?",
    subtext:
      "A question asked at five years old. Carried across forty years, an ocean, and a crisis of faith.",
  },

  storyChapters: [
    {
      num: "01",
      title: "A QUESTION",
      tag: "The Seed of Inquiry",
      subtitle: "The Makhan Chor Paradox",
      content:
        "At five years old, Aakash asked why the Lord of the Universe needed to steal butter from an earthen pot. His father answered with scripture; his mother answered with silence. Neither answer was enough.",
      imageryNote: "Sunlight through earthen jars, a young boy's hand reaching upward in Varanasi dawn.",
      imagePath: "/assets/images/childhood-butter.jpg",
    },
    {
      num: "02",
      title: "A RETURN",
      tag: "Memory & Kinematics",
      subtitle: "The Ocean Between Minds",
      content:
        "Decades later, working in robotics in New York — building algorithms that predict every motion — he is called back to India. The childhood question is still waiting, but now his family is falling apart around it.",
      imageryNote: "Manhattan winter dusk through robotic lab glass, blueprints merging with old family letters.",
      imagePath: "/assets/images/robotics-newyork.jpg",
    },
    {
      num: "03",
      title: "A CONVERGENCE",
      tag: "Beyond the Debate",
      subtitle: "Beyond the Debate",
      content:
        "Science and scripture keep finding each other across a lecture hall, a river ghat, and a family table — not as a debate to be won, but as a convergence Aakash has to live inside.",
      imageryNote: "Double exposure of robotic telemetry and temple mandalas, river currents and quantum vectors.",
      imagePath: "/assets/images/convergence.jpg",
    },
    {
      num: "04",
      title: "AN ANSWER",
      tag: "The Cost of Holding Truth",
      subtitle: "The Weight of Knowing",
      content:
        "By the time he finds his answer, it costs him something to hold — and it isn't one everyone in the story gets to keep.",
      imageryNote: "Floating diya on dark river waters, lone figure contemplating dawn light.",
      imagePath: "/assets/images/hero-varanasi.jpg",
    },
  ] as StoryChapter[],

  characters: [
    {
      id: "aakash",
      name: "Aakash",
      role: "Indian-American Roboticist",
      description: "Carrying a childhood question across decades of computational precision in New York.",
      relation: "The Protagonist",
      visualAtmosphere: "Kinematic algorithms, Manhattan twilight, contemplative gaze.",
      keywords: ["Robotics", "Inquiry", "New York", "Memory"],
    },
    {
      id: "father",
      name: "His Father",
      role: "Patriarch & Scholar",
      description: "A man who has never once said: \"I don't know.\"",
      relation: "The Father",
      visualAtmosphere: "Ancient manuscripts, unwavering stillness, silhouetted against courtyard light.",
      keywords: ["Certainty", "Scripture", "Tradition", "Unbroken Silence"],
    },
    {
      id: "sister",
      name: "His Sister",
      role: "Investigative Thinker",
      description: "Someone who built a career around the questions her family avoids.",
      relation: "The Sister",
      visualAtmosphere: "Archival notebooks, sharp observation, unsparing curiosity.",
      keywords: ["Inquiry", "Subtext", "Modern Lens", "Clarity"],
    },
    {
      id: "wife",
      name: "His Wife",
      role: "Physician & Researcher",
      description: "Her medical precision meets its match in her own father's teaching.",
      relation: "The Wife",
      visualAtmosphere: "Clinical rigor, diagnostic diagnostics, profound empathy.",
      keywords: ["Precision", "Healing", "Dual Heritage", "Insight"],
    },
  ] as Character[],

  convergence: {
    title: "Science vs Scripture",
    statement: "Not a debate to be won, but a convergence Aakash has to live inside.",
    leftSide: {
      domain: "SCIENCE",
      subhead: "Robotics & Empirical Reason",
      loc: "New York Lab",
      elements: [
        "Kinematics & Servo Matrices",
        "Deterministic Proof Systems",
        "Algorithmic Precision",
        "Empirical Causality",
      ],
    },
    rightSide: {
      domain: "SCRIPTURE",
      subhead: "Ancient Vedic Wisdom",
      loc: "The Ganges & Varanasi",
      elements: [
        "The Makhan Chor Paradox",
        "Transcendental Lila",
        "Earthen Ghats at Dawn",
        "Living Philosophical Inquiry",
      ],
    },
  },

  language: {
    tag: "SHOT BILINGUALLY",
    languages: "English + Hindi",
    details: "Performed live on set, not dubbed.",
    devanagariSample: "कृष्ण माखन क्यों चुराते हैं यदि वे ईश्वर हैं?",
    englishSample: "Why does Krishna steal butter if he is God?",
  },

  locations: [
    {
      city: "NEW YORK",
      role: "Second Shoot Block",
      description: "The computational lab, glass and steel, cold winter light overlooking Manhattan.",
      coordinates: "40.7128° N, 74.0060° W",
      atmosphere: "Cold sapphire, linear steel, mathematical precision.",
      imagePath: "/assets/images/robotics-newyork.jpg",
    },
    {
      city: "BENGALURU",
      role: "Production Base & Principal Photography",
      description: "Modern India's technological core, production soundstages, contemporary architecture.",
      coordinates: "12.9716° N, 77.5946° E",
      atmosphere: "Amber architectural glow, lush tropical dusk, contemporary craft.",
      imagePath: "/assets/images/bengaluru-base.jpg",
    },
    {
      city: "VARANASI",
      role: "Location Work Along the River",
      description: "Ancient stone ghats, morning mist on the Ganges, drifting clay diyas and river bells.",
      coordinates: "25.3176° N, 82.9739° E",
      atmosphere: "Earthy terracotta, sacred river fog, golden temple dawn.",
      imagePath: "/assets/images/varanasi-experience.jpg",
    },
  ] as LocationItem[],

  varanasiSpecial: {
    title: "VARANASI",
    subtext: "Where questions meet the river.",
    quote: "Location work along the ancient banks of the Ganges, captured in natural dawn light and atmospheric mist.",
  },

  comparableFilms: [
    {
      title: "The Namesake",
      year: "2006",
      resonance: "Cross-continental identity, profound familial gravity, cultural bridge.",
      imagePath: "/assets/images/ref-namesake.jpg",
    },
    {
      title: "Life of Pi",
      year: "2012",
      resonance: "Intellectual faith vs empirical reality, spiritual wonder, allegory.",
      imagePath: "/assets/images/ref-life-of-pi.jpg",
    },
    {
      title: "The Lunchbox",
      year: "2013",
      resonance: "Restrained emotional depth, unhurried human connection, delicate intimacy.",
      imagePath: "/assets/images/ref-lunchbox.jpg",
    },
    {
      title: "The Man Who Knew Infinity",
      year: "2015",
      resonance: "Mathematical genius meeting transcendental intuition and spiritual devotion.",
      imagePath: "/assets/images/ref-infinity.jpg",
    },
    {
      title: "PK",
      year: "2014",
      resonance: "Fearless theological inquiry, unmasking dogma through innocent childhood logic.",
      imagePath: "/assets/images/ref-pk.jpg",
    },
    {
      title: "The Tree of Life",
      year: "2011",
      resonance: "Cosmic scale intertwined with intimate memory, grief, and grace.",
      imagePath: "/assets/images/ref-treeoflife.jpg",
    },
  ] as ComparableFilm[],

  inquiries: {
    title: "Inquiries",
    lead: "For festivals, press, and industry conversations.",
    body: "Tatraapi is produced and self-financed by Tatraapi Films, LLC. We welcome conversations with festival programmers, talent representation, and industry collaborators.",
  },
};
