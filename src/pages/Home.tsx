import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Stack from "../components/sections/Stack";
import CircularText from "../components/CircularText";
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
            <h1 className="font-bold text-center md:text-4xl text-slate-400">PROJECTS</h1>
          </div>
          <CircularText
            text="JEFF * MUTETHIA * ARRIBION * CODNIFY.DEV * "
            onHover="speedUp"
            spinDuration={20}
            className="custom-class"
          />
          <div>
             <h1 className="font-bold text-center md:text-4xl text-slate-400">UNDER-WAY</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
