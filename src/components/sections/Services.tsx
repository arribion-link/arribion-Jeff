import MagicBento from "../MagicBento"
const Services = () => {
  return (
    <section>
      <h1 className="text-3xl m-4 text-slate-800 text-center">SERVICES</h1>
      <div className="flex justify-center">
        <div className="">
          <MagicBento
            textAutoHide={true}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            spotlightRadius={300}
            particleCount={12}
            glowColor="132, 0, 255"
          />
        </div>
      </div>
    </section>
  );
}

export default Services
