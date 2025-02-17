import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Brighter ambient light for better contrast */}
      <ambientLight intensity={0.6} />
      {/* Adjusted directional lights for better icon visibility */}
      <directionalLight position={[0, 0, 0.05]} intensity={0.6} />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />

      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        {/* Gradient-like material that works well with black icons and background */}
        <meshPhysicalMaterial
          color="#60a5fa"  // Bright sky blue - great contrast against black
          metalness={0.3}  // Reduced metalness for better icon visibility
          roughness={0.2}  // Kept low for shine
          clearcoat={1}    // Maximum clearcoat for a glass-like finish
          clearcoatRoughness={0.1}  // Smooth clearcoat
          iridescence={0.3}  // Subtle color shifting effect
          iridescenceIOR={1}  // Iridescence intensity
          polygonOffset
          polygonOffsetFactor={-5}
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          transparent
          polygonOffset
          polygonOffsetFactor={1}
          flatShading={false}
          opacity={0.9}  // Increased opacity for better visibility
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ 
        preserveDrawingBuffer: true,
        antialias: true,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;