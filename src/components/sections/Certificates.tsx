import Certs from "../../constants/Cert"
import ElectricBorder from "../ElectricBorder";
// import cert_img from "../../assets/hero.png"
const Certificates = () => {
  return (
    <>
      <section className="mx-8">
        <div className="">
          {/* Left side image */}
          <div>
            
          </div>

          {/* Right side grid */}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(15em,1fr))] gap-2">
            {Certs.map((cert) => (
              <ElectricBorder
                key={cert.id}
                color="#7df9ff"
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 16 }}>
                <div className="border border-slate-500/50 rounded min-w-[10em] min-h-[10em] flex items-center justify-center">
                  <h1 className="text-center font-semibold">{cert.id}</h1>
                </div>
              </ElectricBorder>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Certificates
