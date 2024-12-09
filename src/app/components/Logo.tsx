'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Cube from './Cube';
import { Avatar } from './Avatar';

type LogoProps = {
    isCubeVisible: boolean;
};

export default function Logo({ isCubeVisible }: LogoProps) {
  return (
    <div className="h-2/3 w-full sm:h-screen sm:w-1/2 flex justify-center items-center">
      <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} castShadow />
        <group >
            <Avatar position-y={-0.3} rotation-y={90} />
            <Cube visible={isCubeVisible} />
        </group>
        <OrbitControls/>
      </Canvas>
    </div>
  );
}

