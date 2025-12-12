// constants/MobileSocial.ts (or wherever you keep it)

import type { IconType } from "react-icons/lib";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

// Recommended: use camelCase for type names
export type SocialLink = {
  id: number;
  name: string; // e.g. "GitHub", "YouTube"
  url: string; // actual link
  Icon: IconType; // capital "Icon" is conventional
};

const SocialLinks: SocialLink[] = [
  {
    id: 1,
    name: "GitHub",
    url: "https://github.com/yourusername", // ← put your real link here
    Icon: FaGithubSquare,
  },
  {
    id: 2,
    name: "YouTube",
    url: "https://youtube.com/@yourchannel", // ← your real link
    Icon: FaYoutube,
  },
  {
    id: 3,
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername", // ← your real link
    Icon: FaLinkedin,
  },
  {
    id: 4,
    name: "Twitter",
    url: "https://x.com/yourusername", // or "https://twitter.com/..."
    Icon: FaTwitter,
  },
];

export default SocialLinks;
