'use client'
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';


export default function Logo() {
    

    return (
        <div>
            <Canvas >
                <ambientLight intensity={2} />
                <directionalLight position={[20, 20, 20]} />
                <Cube />
            </Canvas>
        </div>
    )
}

