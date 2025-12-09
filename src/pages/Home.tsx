import ScrollVelocity from "../components/ScrollVelocity"
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { FaDownload } from "react-icons/fa";
import hero_image from "../assets/hero.png"
const Home = () => {
    return (
      <>
        <section className=" min-h-screen pt-[6em] m-4">
          <div className="flex justify-around">
            <h1 className="text-3xl font-bold">
              {" "}
              Building scalable data driven intelligent applications.
            </h1>
            <div>
              <img src={hero_image} alt="" className="max-w-[6em]" />
            </div>
          </div>
          <div className=" text-slate-500">
            <div className="flex justify-between">
              <HiOutlineArrowNarrowRight size={50} />
            </div>
            <p className="mt-4 flex items-end">
              from fintech integrations like M-Pesa, stripe and Paypal to
              adaptive platforms for education and e-commerce, delivering
              innovative solutions that blend cutting-edge tech with real-world
              impact in emerging markets.
            </p>
          </div>
        </section>

        <div className="flex gap-3 items-center m-4 bg-gray-900 p-2 hover:text-slate-500">
          <FaDownload className="animate-bounce" size={20} />
          Download my resume
        </div>

        <section className="text-white">
          <ScrollVelocity
            texts={["software development", "web development"]}
            velocity={50}
            className="custom-scroll-text"
          />
        </section>

        <section>
          <h1 className="text-3xl m-4 text-slate-800 text-center">What I Do</h1>
          <div>
           
          </div>
        </section>
      </>
    );
}

export default Home
