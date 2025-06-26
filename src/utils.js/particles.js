// src/utils/particles.js (or wherever you put it)

import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from "react";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: false,
        background: { color: { value: "transparent" } },
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: "#07dbd8" },
          links: {
            enable: true,
            distance: 150,
            color: "#07dbd8",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 2,
            direction: "none",
            outModes: { default: "bounce" },
          },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            repulse: { distance: 100 },
            push: { quantity: 4 },
          },
        },
        detectRetina: true,
      }}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
        pointerEvents: "none"
      }}
    />
  );
};

export default ParticlesBackground;
