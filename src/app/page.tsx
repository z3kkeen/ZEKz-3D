'use client';
import { useState } from 'react';
import Logo from './components/Logo';
import ParticlesBackground from './components/Particles';

export default function App() {
  const [isCubeVisible, setIsCubeVisible] = useState(true);

  const toggleCube = () => {
    setIsCubeVisible(prevState => !prevState);
  };

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col-reverse sm:flex-row justify-center items-center px-4 sm:px-8">
      <div className="flex relative flex-col gap-4 items-center bg-white/10 backdrop-blur-sm shadow-lg border border-white/20 p-5 rounded-2xl max-w-md sm:max-w-lg">
        <div className="flex flex-col text-center sm:text-left">
          <b>
            <h1 className="text-white pl-5 pb-2 text-3xl sm:text-4xl font-[family-name:var(--font-nabla)]">Oh my!</h1>
          </b>
          <p className="text-white text-xl w-full sm:w-80 mb-3 font-[family-name:var(--font-chakra)]">
            Would you look at that. It&apos;s me! Dancing, on a.. Cube?
          </p>
          <p className="text-white text-xl w-full sm:w-80 font-[family-name:var(--font-chakra)]">
            Welp, if you don&apos;t want me to dance on that cube, just click the button below.
          </p>
        </div>
        <b>
          <button
            onClick={toggleCube}
            className="text-amber-700 bg-amber-300 border-2 border-amber-600 px-10 py-1 sm:px-3 rounded-2xl text-lg sm:text-base"
          >
            {isCubeVisible ? 'Hide Cube' : 'Show Cube'}
          </button>
        </b>
      </div>
      <ParticlesBackground />
      <Logo isCubeVisible={isCubeVisible} />
    </div>
  );
}