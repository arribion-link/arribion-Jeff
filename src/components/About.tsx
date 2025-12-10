import { useRef } from 'react';
import VariableProximity from './VariableProximity';

const About = () => {
    const containerRef = useRef(null);
    const label =
      "I build fast, beautiful, production-ready apps that users love — from idea to deployment. Full-Stack Engineer | Clean Architecture & Microservices | React · Next · Node · Nest · Express · Tailwind Thrive in teams, ship clean code fast, and turn ideas into scalable products. Junior role ready (Nairobi/remote) powerful, recruiter-proof.";
  return (
    <div>
      <div ref={containerRef} style={{ position: "relative" }}>
        <VariableProximity
          label={label}
          className={"variable-proximity-demo"}
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
    </div>
  );
}

export default About
