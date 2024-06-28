import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticleComponent() {
  const particlesInit = useCallback(async (engine) => {
    console.log("Initializing tsParticles...");
    await loadFull(engine);
    console.log("tsParticles initialized:", engine);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 60,
        interactivity: {
          detect_on: "canvas",
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
          },
        },
        particles: {
          color: { value: "#ffffff" },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotateX: 600, rotateY: 1200 },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, area: 800 }, value: 80 },
          opacity: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 1,
              sync: false,
            },
            random: false,
            value: 0.5,
          },
          shape: {
            type: "circle",
            stroke: { color: "#000000", width: 0 },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100,
              replaceColor: true,
            },
            polygon: { nb_sides: 5 },
            character: {
              value: "*",
              font: "Verdana",
              style: "",
              weight: "400",
              fill: false,
            },
          },
          size: {
            animation: {
              enable: false,
              minimumValue: 0.1,
              speed: 40,
              sync: false,
            },
            random: true,
            value: 5,
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: "",
        },
        retinaDetect: true,
      }}
    />
  );
}

export default ParticleComponent;
