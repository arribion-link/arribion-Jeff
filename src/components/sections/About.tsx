import FeaturedProjects from "../ui/FeaturedProjects";

const About = () => {
  return (
    <>
      <section className=" mt-[1em] md:mt-[8em] mx-4 md:min-h-[90vh]">
        <h1 className="mb-8 text-slate-800 text-3xl ml-[3em]">ABOUT ME</h1>
        <div className="grid md:grid-cols-2 items-center">
          <div></div>
          <div>
            <div className="md:mt-15 text-gray-400">
              <p className="text-center text-slate-300 md:text-end">
                {" "}
                I build fast, beautiful, production-ready apps that users love —
                from idea to deployment. Full-Stack Engineer | Clean
                Architecture & Microservices | React · Next · Node · Nest ·
                Express · Tailwind Thrive in teams, ship clean code fast, and
                turn ideas into scalable products. Junior role ready
                (Nairobi/remote) powerful, recruiter-proof.
              </p>
            </div>
            <div>
              <h1 className="font-bold md:text-3xl my-4">Featured Projects</h1>
              <div>
              <FeaturedProjects/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About

