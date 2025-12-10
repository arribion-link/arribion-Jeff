import { FaDownload, FaGithubSquare, FaTwitter, FaYoutube } from "react-icons/fa";
import hero_image from "../assets/hero-stoic-head.png";
import TextPressure from "../components/TextPressure";
import GradientText from "./GradientText";
import { FaLinkedin } from "react-icons/fa";
const Hero = () => {
  return (
    <>
      <section className=" min-h-screen pt-[6em] m-8">
        <div>
          <div className="">
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

            <div className="flex justify-between mt-4">
              <div className="">
                <p className=" flex font-bold text-slate-400/50">
                  Delivering innovative solutions <br /> that blend cutting-edge 
                  tech <br />
                  with real-world <br /> in emerging markets.
                  <br />{" "}
                  <h1> Building sleek scalable data driven <br /> applications.</h1>
                </p>
                <div>
                  <img
                    src={hero_image}
                    alt=""
                    className="max-w-[6em] md:max-w-[20em] md:absolute md:right-[40%] md:bottom-0"
                  />
                </div>
                <div className="flex mt-4 gap-3 items-center bg-gray-900 p-2 hover:text-slate-500 max-w-[20em]">
                  <FaDownload className="animate-bounce" size={20} />
                  Download my resume
                </div>
              </div>
              <div className="mt-2">
                <button className="text-bold text-3xl border rounded-2xl border-slate-600 py-3 px-8">
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
                <div className="my-3">
                  <h2 className="text-slate-300 font-bold"> Follow Me On:</h2>
                </div>
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
