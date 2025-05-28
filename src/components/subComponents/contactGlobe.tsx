"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useAnimations } from "@react-three/drei";
import styles from "./contactGlobe.module.css";

function AnimatedGlobe() {
  const { scene, animations } = useGLTF("/world.glb"); // Replace with actual animated GLB
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return <primitive object={scene} scale={1.3} />;
}

export default function GlobeModel() {
  return (
    <div className={styles.canva}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[1000, 10000, 1000]} />
        <Suspense fallback={null}>
          <AnimatedGlobe />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
