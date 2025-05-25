"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import styles from "./threeDModel.module.css"

// Responsive model scale based on screen size
function ResponsiveModel() {
  const { viewport } = useThree();
  const gltf = useGLTF("/desktop.glb");

  // Adjust scale based on screen width
  const [scale, setScale] = useState(16);

  useEffect(() => {
    if (viewport.width < 600) {
      setScale(5); // Mobile
    } else if (viewport.width < 1024) {
      setScale(10); // Tablet
    } else {
      setScale(5); // Desktop
    }
  }, [viewport.width]);

  return (
    <Center>
      <primitive object={gltf.scene} scale={scale} />
    </Center>
  );
}

export default function ThreeDModel() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-400px]">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className={styles.canva}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={null}>
          <ResponsiveModel />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}
