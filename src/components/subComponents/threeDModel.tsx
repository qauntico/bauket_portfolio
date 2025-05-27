"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, useProgress, Html } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress"; // ShadCN Progress
import styles from "./threeDModel.module.css";

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

// Responsive model component
function ResponsiveModel() {
  const { viewport } = useThree();
  const gltf = useGLTF("/desktop.glb");

  const [scale, setScale] = useState(16);

  useEffect(() => {
    if (viewport.width < 600) {
      setScale(5);
    } else if (viewport.width < 1024) {
      setScale(10);
    } else {
      setScale(5);
    }
  }, [viewport.width]);

  return (
    <Center>
      <primitive object={gltf.scene} scale={scale} />
    </Center>
  );
}

// Main export
export default function ThreeDModel() {
  return (
    <div className="w-full h-[300px] sm:h-[400px] md:h-[400px] relative">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className={styles.canva}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
        <Suspense fallback={<Loader />}>
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