// ─────────────────────────────────────────────────────────────
// THE ROUTE SHEET
// Add a new stop by adding a new object to this array.
// `youtubeId` is the part after "v=" in a YouTube URL.
// `accentColor` is the neon glow color used for this song on the site
//   (hero lights, the touch spark effect, the dot next to it in the list).
// `tags` power the filter pills — reuse existing tags where you can:
//   90s, 2000s, nostalgia, punjabi, bhangra, bollywood, afro, house, throwbacks
// `languages` power the language toggle: english, hindi, punjabi
// ─────────────────────────────────────────────────────────────

const tracks = [
  {
    id: "chaiyya-chaiyya",
    accentColor: "#FF6B4A",
    title: "Chaiyya Chaiyya",
    artist: "Sukhwinder Singh, Sapna Awasthi",
    album: "Dil Se",
    year: 1998,
    youtubeId: "9MX-QejdVaQ",
    tags: ["90s", "bollywood", "nostalgia", "throwbacks"],
    languages: ["hindi"],
  },
  {
    id: "mundian-to-bach-ke",
    accentColor: "#2EE6FF",
    title: "Mundian To Bach Ke",
    artist: "Panjabi MC",
    album: "Beware",
    year: 2002,
    youtubeId: "x9WO2ieJMYk",
    tags: ["2000s", "punjabi", "bhangra", "house", "throwbacks"],
    languages: ["punjabi"],
  },
  {
    id: "kajra-re",
    accentColor: "#FF2E88",
    title: "Kajra Re",
    artist: "Alisha Chinai, Shankar Mahadevan, Javed Ali",
    album: "Bunty Aur Babli",
    year: 2005,
    youtubeId: "4dsFQFCvVGU",
    tags: ["2000s", "bollywood", "nostalgia"],
    languages: ["hindi"],
  },
  {
    id: "kar-gayi-chull",
    accentColor: "#C6FF2E",
    title: "Kar Gayi Chull",
    artist: "Badshah, Neha Kakkar, Sukriti Kakkar, Fazilpuria",
    album: "Kapoor & Sons",
    year: 2016,
    youtubeId: "-sWXx1mbgtU",
    tags: ["bollywood", "house"],
    languages: ["hindi", "english"],
  },
  {
    id: "kala-chashma",
    accentColor: "#B14EFF",
    title: "Kala Chashma",
    artist: "Amar Arshi, Badshah, Neha Kakkar",
    album: "Baar Baar Dekho",
    year: 2016,
    youtubeId: "k4yXQkG2s1E",
    tags: ["punjabi", "bhangra", "throwbacks"],
    languages: ["punjabi", "hindi"],
  },
  {
    id: "nachde-ne-saare",
    accentColor: "#FFD23F",
    title: "Nachde Ne Saare",
    artist: "Jasleen Royal, Harshdeep Kaur, Siddharth Mahadevan",
    album: "Baar Baar Dekho",
    year: 2016,
    youtubeId: "bvVQCL_4f-M",
    tags: ["bollywood", "house"],
    languages: ["hindi"],
  },
  {
    id: "chogada",
    accentColor: "#2EFFC6",
    title: "Chogada",
    artist: "Darshan Raval, Asees Kaur",
    album: "Loveyatri",
    year: 2018,
    youtubeId: "yr7JFNsz5dU",
    tags: ["bollywood", "nostalgia"],
    languages: ["hindi"],
  },
  {
    id: "naach-meri-rani",
    accentColor: "#FF4D6D",
    title: "Naach Meri Rani",
    artist: "Guru Randhawa, Nikhita Gandhi ft. Nora Fatehi",
    album: "Single",
    year: 2020,
    youtubeId: "TCx1yMegJ4A",
    tags: ["afro", "bollywood", "house"],
    languages: ["hindi"],
  },
];

export const FILTERS = [
  "90s",
  "2000s",
  "nostalgia",
  "punjabi",
  "bhangra",
  "bollywood",
  "afro",
  "house",
  "throwbacks",
];

export const LANGUAGES = [
  { code: "all", label: "All" },
  { code: "english", label: "English" },
  { code: "hindi", label: "हिंदी" },
  { code: "punjabi", label: "ਪੰਜਾਬੀ" },
];

export default tracks;
