import About from "../components/About";
import CircularGallery from "../components/CircularGallery";
import Hero from "../components/Hero";
const Home = () => {
    return (
      <>
        <Hero />
        
        <section className="text-white">
          <div style={{ height: "600px", position: "relative" }}>
            <CircularGallery
              bend={2}
              textColor="#ffffff"
              borderRadius={0.05}
              scrollEase={0.02}
            />
          </div>
        </section>

        <section className="mt-16 mx-10 text-4xl text-center font-bold">
          <h1 className="text-3xl m-4 text-slate-800 text-center">ABOUT ME</h1>
          <About />
        </section>
      </>
    );
}

export default Home
