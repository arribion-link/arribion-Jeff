import {
  FaDownload,
  FaGithubSquare,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import hero_image from "../../assets/hero-stoic-head.webp";
import TextPressure from "../TextPressure";
import GradientText from "../GradientText";
import { FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";
import TargetCursor from "../TargetCursor";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const scrollRef = useRef<HTMLImageElement | null>(null);

    useEffect(() => {
      // Only run animation on desktop (min-width: 768px)
      ScrollTrigger.matchMedia({"(min-width: 768px)": () => {
          if (scrollRef.current) {
            gsap.to(scrollRef.current, {
              x: "-20vw", // move left
              scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "+=900", // only 300px of scroll
                pin: scrollRef.current,
                scrub: true,
              },
            });
          }
        },
      });
    }, []);

  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <section className="pt-[3em] min-h-screen md:pt-[8em] m-8">
        <div style={{ position: "relative", height: "200px" }}>
          <TextPressure
            text="HI, I'M JEFF"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>

        <img
          ref={scrollRef}
          src={hero_image}
          alt="Stoic head illustration"
          className="top-[5em] right-0 max-w-[12em] absolute md:top-1/2 md:left-1/2 md:transform-translate-x-1/2 md:-translate-y-1/2 md:max-w-[20em]"
        />

        <div className="mt-[5em] md:flex md:justify-between">
          <div className="hero-LHS">
            <div className="her0-subheading">
              <h1 className=" flex font-bold text-slate-400/50">
                {" "}
                Building sleek <br className="md:hidden" /> scalable data driven
                applications. that blend <br /> cutting-edge tech with
                real-world in emerging markets.
              </h1>
            </div>
            <div className="resume-download-button flex justify-center">
                <button className="cursor-target flex my-4 md:mt-4 rounded gap-3   items-center bg-gray-900 p-2 hover:text-slate-500 max-w-[20em]">
                  <FaDownload className="animate-bounce" size={20} /> Download
                  my resume
                </button>
            </div>
          </div>

          <div className="hero-RHS">
            <div className="contact-button">
              <button className="cursor-target w-full text-bold text-3xl border rounded-2xl border-slate-600 py-3 px-8">
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class">
                  Contact Me
                </GradientText>
              </button>
            </div>
            <div className="follow-on-social-media hidden md:block ">
              <div className="my-3">
                <h2 className="text-center text-slate-300 font-bold">
                  {" "}
                  Follow Me On:
                </h2>
              </div>
              <div className="flex justify-center">
                <div className="flex gap-5">
                  <FaLinkedin size={25} />
                  <FaYoutube size={25} />
                  <FaTwitter size={25} />
                  <FaGithubSquare size={25} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
