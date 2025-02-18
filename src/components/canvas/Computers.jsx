import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Preload } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import ErrorBoundary from "../ErrorBoundary";

const Computers = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scene, nodes, materials } = useGLTF("/desktop_pc/scene.gltf");

  // Clone the scene to avoid mutation issues
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} position={[0, 10, 10]} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={scene.clone()}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// Function to check WebGL compatibility
const checkWebGLCompatibility = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
};

const ComputersCanvas = () => {
  const [isWebGLSupported, setIsWebGLSupported] = useState(true);

  useEffect(() => {
    setIsWebGLSupported(checkWebGLCompatibility());
  }, []);

  if (!isWebGLSupported) {
    return (
      <div className="webgl-error">
        <p>WebGL is not supported or enabled in your browser.</p>
        <p>Please enable WebGL or use a different browser.</p>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <Canvas
        frameloop='demand'
        shadows
        dpr={[1, 2]}  // Control pixel ratio for performance
        camera={{position:[20, 30, 5], fov:25}}
        gl={{
          preserveDrawingBuffer: true,
          antialias: true,  // Improve rendering quality
          alpha: false,     // Improve performance
          powerPreference: 'high-performance'
        }}
      >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2} 
          />
          <Computers />
        </Suspense>
        <Preload all />
      </Canvas>
    </ErrorBoundary>
  );
};

// Preload the model
useGLTF.preload("/desktop_pc/scene.gltf");

export default ComputersCanvas;