import {
  IoSunnyOutline,
  // IoMoonOutline
} from "react-icons/io5";

import { Link } from "react-router-dom";
import { FiSidebar } from "react-icons/fi";
import {
  // FaCode,
  FaYoutube,
  FaNetworkWired,
  FaRegFileArchive,
  FaBlog,
} from "react-icons/fa";

import { FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

import {
    GiBookshelf,
    // GiSkills
} from "react-icons/gi";

// import LOGO from "../../public/codnify-1.png"
const Header= () => {
  return (
    <>
      <header
        className="
 px-6 py-3 m-4 rounded-4xl fixed top-0 left-0 right-0 
  bg-white/2 backdrop-blur-xl border border-white/25 text-gray-400
">
        {" "}
        <div className=" flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex gap-4 items-center">
              <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Overview">
                  <FiSidebar size={20} />
                  <h2>OverView</h2>
                </div>
              </Link>
              <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Projects">
                  <FaNetworkWired size={20} />
                  <h2>Projects</h2>
                </div>
              </Link>
              {/* <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Skills">
                  <GiSkills size={20} />
                  <h2>Skills</h2>
                </div>
              </Link> */}
              <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Blog">
                  <FaBlog size={20} />
                  <h2>Blog</h2>
                </div>
              </Link>
              <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Archive">
                  <FaRegFileArchive size={20} />
                  <h2>Archive</h2>
                </div>
              </Link>
              <Link to="">
                <div
                  className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                  title="Courses">
                  <GiBookshelf size={20} />
                  <h2>Courses</h2>
                </div>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div
              className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
              title="LinkedIn">
              <FaLinkedin size={20} />
            </div>
            <div
              className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
              title="Twitter(X)">
              <FaXTwitter size={20} />
            </div>
            <div
              className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
              title="More">
              <FaYoutube size={20} />
            </div>
            <div
              className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
              title="More">
              <FaGithub size={20} />
            </div>
            <div className="text-gray-50/20">|</div>
            <div
              className="flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
              title="More">
              <IoSunnyOutline size={20} />
              {/* <IoMoonOutline/> */}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
