import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent",
        },
      },
      fpsLimit: 80,
      interactivity: {
        events: {
          onClick: {
            enable: false,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: false,
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 175,
            duration: 0.4,
          },
        },
      },
      particles: {
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: true,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: false,
            area: 550,
          },
          value: 8,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "image",
          stroke: {
            width: 0,
            color: "#ffd700",
          },
          options: {
            image: {
              src: "https://raw.githubusercontent.com/ytrkptl/achsdirectory/main/public/hippo.png",
              width: 100,
              height: 100,
            },
          },
        },
        size: {
          value: 30,
          random: {
            enable: false,
            minimumValue: 30,
          },
          animation: {
            enable: false,
            speed: 400,
            minimumValue: 0.1,
            sync: false,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParticlesComponent;