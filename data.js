window.CATALOG = [
  // ✅ MAIN OTT
  {
    id: "netflix",
    name: "Netflix",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    price: 149,
    billing: "/mo",
    tags: ["OTT", "Movies", "Series", "Premium"],
    category: "ott"
  },
  {
    id: "hotstar",
    name: "Disney+ Hotstar",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1a/Disney%2B_Hotstar_logo.png",
    price: 799,
    billing: "/yr",
    tags: ["OTT", "Sports", "Disney", "Movies"],
    category: "ott"
  },
  {
    id: "sonyliv",
    name: "Sony LIV",
    logo: "https://upload.wikimedia.org/wikipedia/en/3/3b/SonyLIV_2020.png",
    price: 199,
    billing: "/mo",
    tags: ["OTT", "Live TV", "Sports"],
    category: "ott"
  },
  {
    id: "zee5",
    name: "ZEE5",
    logo: "https://upload.wikimedia.org/wikipedia/en/2/22/ZEE5_logo.png",
    price: 399,
    billing: "/yr",
    tags: ["OTT", "Shows", "Movies"],
    category: "ott"
  },
  {
    id: "primevideo",
    name: "Amazon Prime Video",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png",
    price: 899,
    billing: "/yr",
    tags: ["OTT", "Movies", "Music"],
    category: "ott"
  },
  {
    id: "youtube",
    name: "YouTube Premium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png",
    price: 129,
    billing: "/mo",
    tags: ["Music", "Ad-free", "Background Play"],
    category: "ott"
  },
  {
    id: "spotify",
    name: "Spotify Premium",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
    price: 49,
    billing: "/mo",
    tags: ["Music", "Podcasts"],
    category: "ott"
  },
  {
    id: "apple",
    name: "Apple TV+",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/Apple_TV%2B_logo.png",
    price: 99,
    billing: "/mo",
    tags: ["OTT", "Originals"],
    category: "ott"
  },
  {
    id: "hulu",
    name: "Hulu",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg",
    price: 199,
    billing: "/mo",
    tags: ["OTT", "TV Shows"],
    category: "ott"
  },
  {
    id: "hbomax",
    name: "HBO Max",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    price: 299,
    billing: "/mo",
    tags: ["OTT", "Hollywood"],
    category: "ott"
  },

  // ✅ EXTRA INDIAN OTT
  {
    id: "jiocinema",
    name: "Jio Cinema",
    logo: "https://upload.wikimedia.org/wikipedia/en/0/0a/Jio_Cinema_Logo.png",
    price: 149,
    billing: "/mo",
    tags: ["OTT", "Sports", "Movies"],
    category: "ott"
  },
  {
    id: "voot",
    name: "Voot Select",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Voot_logo.png",
    price: 99,
    billing: "/mo",
    tags: ["Shows", "BigBoss"],
    category: "ott"
  },
  {
    id: "alt",
    name: "ALT Balaji",
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/ALTBalaji_logo.png",
    price: 199,
    billing: "/yr",
    tags: ["Web Series"],
    category: "ott"
  },
  {
    id: "crunchyroll",
    name: "Crunchyroll",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/Crunchyroll_Logo.png",
    price: 99,
    billing: "/mo",
    tags: ["Anime"],
    category: "ott"
  },

  // ✅ AUTO-GENERATED 20 MORE OTT (LOGO FIXED ✅)
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `ott_extra_${i + 1}`,
    name: `Super OTT ${i + 1}`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/OTT_logo.png",
    price: 199,
    billing: "/mo",
    tags: ["OTT", "Streaming"],
    category: "ott"
  })),

  // ✅ EDITING APPS
  {
    id: "canva",
    name: "Canva Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Canva_Logo.png",
    price: 199,
    billing: "/yr",
    tags: ["Editing", "Design", "Tools"],
    category: "editing"
  },
  {
    id: "photoshop",
    name: "Adobe Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_Mobile_icon.svg",
    price: 499,
    billing: "/yr",
    tags: ["Editing", "Photos"],
    category: "editing"
  },
  {
    id: "premiere",
    name: "Adobe Premiere Pro",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
    price: 499,
    billing: "/yr",
    tags: ["Editing", "Video"],
    category: "editing"
  },

  // ✅ COURSES
  {
    id: "linkedin",
    name: "LinkedIn Learning",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
    price: 199,
    billing: "/yr",
    tags: ["Courses", "Learning"],
    category: "courses"
  },
  {
    id: "coursera",
    name: "Coursera",
    logo: "https://about.coursera.org/static/img/og/coursera-logo-social.png",
    price: 999,
    billing: "/mo",
    tags: ["Certificates", "Learning"],
    category: "courses"
  }
];
