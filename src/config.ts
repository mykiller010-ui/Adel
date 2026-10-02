import type { IconName } from "./icons";

export interface SocialLink {
  label: string;
  icon: IconName;
  color: string;
  href?: string;
  copy?: string;
  toast?: string;
}

export interface Track {
  title: string;
  src: string;
}

export const profile = {
  kanji: "夜",
  name: "Adel",
  tagline: "MY LITTLE CORNER",
  description: "I’m an art enthusiast who loves reading, growing as a person, and finding little moments that calm my soul. Kindness and compassion are the qualities I admire most in people I have many ambitions  but my biggest dream is to become an architect. For now  I’m a girl finding her way in this world  learning as I go  and hoping to contribute something meaningful to it.",
};

// Paste Adel's profile URLs below. For Discord, enter her username in copy.
// Empty account details keep a button visible but inactive.
export const links: SocialLink[] = [
  { label: "Discord", icon: "discord", color: "#5865f2", copy: "titanxxm" },
  { label: "Instagram", icon: "instagram", color: "#e88aa8", href: "https://www.instagram.com/m03e.11" },
  { label: "TikTok", icon: "tiktok", color: "#ffffff", href: "https://www.tiktok.com/@adel.thebadd" },
];

export const tracks: Track[] = [
  {
    title: "Caleb Belkin - I Fall In Love Too Easily",
    src: "/music/caleb_belkin_i_fall_in_love_too_easily.mp3",
  },
  {
    title: "Hisohkah - School Rooftop",
    src: "/music/hisohkah_school_rooftop.mp3",
  },
  {
    title: "Kudasai - Dream Of Her",
    src: "/music/kudasai_dream_of_her.mp3",
  },
  {
    title: "Kudasai - The Girl I Haven't Met",
    src: "/music/kudasai_the_girl_i_havent_met.mp3",
  },
  {
    title: "Lovey - Ever Since",
    src: "/music/lovey_ever_since.mp3",
  },
  {
    title: "Yagih Mael - Fly Me To The Moon",
    src: "/music/yagih_mael_fly_me_to_the_moon.mp3",
  },
];

export const slides: string[] = Array.from(
  { length: 7 },
  (_, i) => `./slides/${String(i + 1).padStart(2, "0")}.webp`,
);

export const settings = {
  slideInterval: 9000,
  slideFade: 1800,
  shuffleSlides: true,
  startVolume: 0.12,
  autoplayOnFirstInteraction: false,
};
