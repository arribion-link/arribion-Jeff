import SocialLinks from "../../constants/MobileSocial";

const Footer = () => {
  return (
    <footer className="pb-16 md:py-5">
      <hr className="text-slate-700/45" />
      <div className="flex justify-center">
        <div>
          <div className="flex justify-center">
            <div className="flex fixed bottom-3 left-0 right-0 md:relative md:justify-center gap-4 my-4  bg-white/2 backdrop-blur-xl border border-white/25 text-gray-400 p-4 w-fit px-8 rounded-2xl mx-4 md:hidden">
              {SocialLinks.map(
                (socialLink: { icons: unknown; link: string | undefined }) => {
                  const Icon = socialLink.icons;
                  return (
                    <div
                      className="cursor-target text-red-500 flex gap-2 bg-gray-50/5 px-3 py-1 rounded-4xl ease items-center"
                      title={socialLink.link}>
                      <Icon size={20} />
                    </div>
                  );
                }
              )}
            </div>
          </div>
          <div>
            <h1 className="text-center text-slate-700">
              &copy; {new Date().getFullYear()}{" "}
              <span className="text-slate-600">Jeff</span> Arribion. Codnify.dev
              . <span className="text-slate-600">All Rights Reserved</span>.
            </h1>
          </div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export default Footer
