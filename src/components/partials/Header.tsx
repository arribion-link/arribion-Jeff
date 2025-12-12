
import { Link } from "react-router-dom";
import NavLinks from "../../constants/header";
import SocialLinks from "../../constants/MobileSocial";
const Header = () => {
  return (
    <>
      <header
        className=" z-50 px-6 py-3 m-4 rounded-2xl fixed top-0 left-0 right-0
          bg-white/2 backdrop-blur-xl border border-white/25 text-gray-400
        ">
        <div className="flex justify-center">
          <div className="flex items-center gap-4">
            <div className="md:flex gap-8 items-center">
              <div className="hidden md:flex gap-8 items-center">
                {NavLinks.map((navlink) => {
                  const Icon = navlink.icon;
                  return (
                    <Link to="" key={navlink.id}>
                      <div
                        className="cursor-target flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                        title={navlink.link}>
                        <Icon size={25} />
                        <h2>{navlink.link}</h2>
                      </div>
                    </Link>
                  );
                })}
              </div>
              <div className="flex gap-4 md:hidden">
                {SocialLinks.map((socialLink) => {
                  const Icon = socialLink.icons;
                  return (
                    <div
                      className="cursor-target flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl hover:bg-gray-100/10 ease items-center"
                      title={socialLink.link}>
                      <Icon size={25} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
