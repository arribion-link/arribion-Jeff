import ScrollVelocity from "../components/ScrollVelocity"
import ElectricBorder from "../components/ElectricBorder"
// import RotatingText from "../components/RotatingText"
// import Services from "../components/Services"
// import services from "../constants/Services"

import hero_image from "../assets/hero.png"
const Home = () => {
    return (
      <>
        <section className=" justify-around min-h-screen pt-[8em]">
          <div className="text-center">
            <h1 className="text-8xl"> Crafting Scalable Systems & Intelligent Interfaces</h1>
            <p>
              From AI engineering to human-centered web design, <br/> I build secure,
              data-driven platforms that empower users and drive real-world
              impact.
            </p>
          </div>
          <div>
            <img
              src={hero_image}
              alt=""
              className="max-w-[25em] z-30 absolute top-5 right-0"
            />
          </div>
          {/* <RotatingText
                texts={["My name is Jeff", "I'm a Software Developer"]}
                mainClassName="px-2 w-fit text-white font-bold text-3xl sm:px-2 md:px-3 bg-purple-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              /> */}
        </section>

        <section className="text-white">
          <ScrollVelocity
            texts={[
              "software development",
              "web development"
            ]}
            velocity={50}
            className="custom-scroll-text"
          />
        </section>

        <section className="text-white min-h-screen m-4">
          <div
            className="
                grid gap-4 
                grid-cols-[repeat(auto-fill,minmax(200px,1fr))] 
                sm:grid-cols-[repeat(auto-fill,minmax(250px,1fr))] 
                md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))]
                ">
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.5}
              thickness={2}
              style={{ borderRadius: 16 }}></ElectricBorder>
          </div>
        </section>
      </>
    );
}

export default Home
