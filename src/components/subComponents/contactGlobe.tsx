"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useProgress, Html} from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { useAnimations } from "@react-three/drei";
import styles from "./contactGlobe.module.css";
import { Progress } from "@/components/ui/progress";

// Loader component using useProgress
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center text-white">
        <span className="mb-2 text-sm font-bold">Loading.. {Math.floor(progress)}%</span>
        <Progress value={progress} className="w-40 h-2 bg-gray-800" />
      </div>
    </Html>
  );
}

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
        <Suspense fallback={<Loader />}>
          <AnimatedGlobe />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} />
      </Canvas>
    </div>
  );
}
