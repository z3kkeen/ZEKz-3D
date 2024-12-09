import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type Container, type ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
        background: {
            color: {
                value: "#20132C",
            },
        },
        fpsLimit: 60,
        interactivity: {
            events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            },
            modes: {
            push: {
                quantity: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.3,
            },
            },
        },
        particles: {
            color: {
            value: "#BA453F",
            },
            links: {
            color: "#BA453F",
            distance: 120,
            enable: true,
            opacity: 1,
            width: 2,
            },
            move: {
            direction: MoveDirection.none,
            enable: true,
            outModes: {
                default: OutMode.out,
            },
            random: false,
            speed: 3,
            straight: false,
            },
            number: {
            density: {
                enable: true,
            },
            value: 350,
            },
            opacity: {
            value: 1,
            },
            shape: {
            type: "triangle",
            },
            size: {
            value: { min: 2, max: 3 },
            },
        },
        detectRetina: true,
    }),
    [],
  );

  if (init) {
    return <Particles id="tsparticles" className="-z-40 absolute" particlesLoaded={particlesLoaded} options={options} />;
  }

  return <></>;
};

export default ParticlesBackground;