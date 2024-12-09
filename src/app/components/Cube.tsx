'use client'
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei';

type CubeProps = {
    visible: boolean;
};

export default function Cube({ visible }: CubeProps) {
    const cubeRef = useRef();
    
    useFrame(() => {
        if(cubeRef.current) {
            cubeRef.current.rotation.x += 0.02
            cubeRef.current.rotation.y += 0.04
        } 
    })

    return (
        <>
            <OrbitControls />
            <mesh ref={cubeRef} visible={visible} position-y={-0.9}>
                <boxGeometry args={[0.8, 0.8, 0.8]} />
                <meshNormalMaterial />
            </mesh>
        </>
    )
}