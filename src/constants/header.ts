

import { FiSidebar } from "react-icons/fi";
import { FaNetworkWired, FaRegFileArchive, FaBlog } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import type { IconType } from "react-icons/lib";

type navLink = {
  id: number;
  link: string;
  icon: IconType;
}

const NavLinks: navLink[] = [
  {
    id: 1,
    link: "OverView",
    icon: FiSidebar
  },
  {
    id: 3,
    link: "Projects",
    icon: FaNetworkWired
  },
  {
    id: 4,
    link: "Blog",
    icon: FaBlog
  },
  {
    id: 5,
    link: "Archive",
    icon: FaRegFileArchive
  },
  {
    id: 6,
    link: "Cerificates",
    icon: GiBookshelf
  },
];

export default  NavLinks
