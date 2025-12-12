import LaserFlow from "../LaserFlow";
import { useRef } from "react";
import main_dashboard from "../../assets/main-dashboard.jpg"
const Software = () => {
  const revealImgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (revealImgRef.current) {
      revealImgRef.current.style.setProperty("--mx", `${x}px`);
      revealImgRef.current.style.setProperty("--my", `${y}px`);
    }
  };

  const handleMouseLeave = () => {
    if (revealImgRef.current) {
      revealImgRef.current.style.setProperty("--mx", `-9999px`);
      revealImgRef.current.style.setProperty("--my", `-9999px`);
    }
  };

  return (
    <div
      style={{
        height: "800px",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#060010",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
      {/* LaserFlow Background */}
      <LaserFlow
        horizontalBeamOffset={0.01}
        verticalBeamOffset={0.0}
        color="#FF79C6"
      />

      {/* MAIN CONTENT */}
      {/* 1. STATIC COVER IMAGE (always visible, dimmed) */}
      <div
        style={{
          position: "absolute",
          top: "83%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "86%",
          height: "66%",
          backgroundImage: `url(../assets/dashboard.jpg)`, // your image
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "20px",
          border: "2px solid #FF79C6",
          boxShadow: "0 0 40px rgba(255, 121, 198, 0.4)",
          zIndex: 4,
          opacity: 0.35, // dimmed base version
          pointerEvents: "none",
        }}
      ></div>

      {/* Reveal Image with Mouse-Following Mask */}
      <img
        ref={revealImgRef}
        src={main_dashboard} // Example high-quality image
        alt="Reveal effect"
        style={
          {
            position: "absolute",
            top: "20%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "70%",
            objectFit: "cover",
            borderRadius: "20px",
            zIndex: 5,
            mixBlendMode: "lighten",
            opacity: 0.4,
            pointerEvents: "none",
            "--mx": "-9999px",
            "--my": "-9999px",
            WebkitMaskImage:
              "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, transparent 300px)",
            maskImage:
              "radial-gradient(circle at var(--mx) var(--my), white 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, transparent 300px)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            transition: "opacity 0.3s ease",
          } as React.CSSProperties
        }
      />
    </div>
  );
};

export default Software;
