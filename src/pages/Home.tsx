import Orb from "../components/Orb"
// import DNA from "../assets/dna.gif"
import RotatingText from "../components/RotatingText";
const Home = () => {
    return (
      <>
        <section className="flex items-center">
          <div className="flex justify-center items-center h-screen w-screen bg-gray-900">
            <div>
              <h1 className="text-6xl text-white mb-8 text-center">Hello World</h1>
              <RotatingText
                texts={["My name is Jeff", "I'm a Software Developer"]}
                mainClassName="px-2 text-white font-bold text-3xl sm:px-2 md:px-3 bg-purple-500 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </div>
          </div>
          <div
            style={{
              width: "100%",
              height: "600px",
              position: "fixed",
              top: 30,
            }}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0}
              forceHoverState={false}
            />
          </div>
        </section>
      </>
    );
}

export default Home
