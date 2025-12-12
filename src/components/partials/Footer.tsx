// components/Footer.tsx
import SocialLinks from "../../constants/MobileSocial";

const Footer = () => {
  return (
    <footer className="pb-16 md:py-5">
      <hr className="text-slate-700/45" />

      <div className="flex justify-center">
        <div className="w-full max-w-5xl">
          {/* Mobile Floating Social Bar */}
          <div className="flex justify-center">
            <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center md:relative md:bottom-auto md:left-auto md:right-auto">
              <div className="flex gap-5 bg-white/5 backdrop-blur-xl border border-white/20 px-8 py-4 rounded-2xl shadow-2xl md:hidden">
                {SocialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition transform hover:scale-110"
                    aria-label={social.name}>
                    <social.Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center text-slate-600 mt-12 md:mt-8">
            © {new Date().getFullYear()}{" "}
            <span className="text-slate-500 font-medium">Jeff Arribion</span>.
            Codnify.dev. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
