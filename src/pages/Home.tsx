import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Stack from "../components/sections/Stack";
import CircularText from "../components/CircularText";
import Software from "../components/sections/Software";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Stack />
      <div className="flex justify-center">
        <div className="grid md:grid-cols-3 items-center">
          <div>
            <h1 className="font-bold text-center md:text-4xl text-slate-400">
              SOTWARE
            </h1>
          </div>
          <CircularText
            text="JEFF * MUTETHIA * ARRIBION * CODNIFY.DEV * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class text-yellow-300"
          />
          <div>
            <h1 className="font-bold text-center md:text-4xl text-slate-400">
              ENGINEER
            </h1>
          </div>
        </div>
      </div>
      {/* <Stack />
      <div className=" min-h-[4em] flex justify-center items-center text-purple-500 font-bold ml-[15em]">HELLO WORLD!!!</div> */}
      <Software/>
    </>
  );
};

export default Home;
