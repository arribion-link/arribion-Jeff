
import type { IconType } from "react-icons/lib";
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
type socialLink = {
    id: number;
    link: string;
    icons: IconType;
}

const SocialLinks: socialLink[] = [
  {
        id: 1,
      link:"Github",
    icons: FaGithubSquare,
  },
  {
      id: 2,
      link:"YouTube",
    icons: FaYoutube,
  },
  {
      id: 3,
      link: "LinkedIn",
    icons: FaLinkedin,
  },
  {
      id: 1,
      link: "Twitter",
    icons: FaTwitter,
  },
]; 

export default SocialLinks