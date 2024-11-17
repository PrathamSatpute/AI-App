import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Car() {
  // Make sure this path matches your public folder structure
  const { scene } = useGLTF('/models/scene.gltf');

  return (
    <primitive
      object={scene}
      scale={1.5}
      position={[0, -1, 0]}
      rotation={[0, Math.PI / 4, 0]}
    />
  );
}

// Preload the model
useGLTF.preload('/models/scene.gltf');
