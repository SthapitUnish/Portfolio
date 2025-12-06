import React, { useMemo } from "react";
import * as THREE from "three";

const HeroLights = () => {
  const areaLight = useMemo(() => {
    const l = new THREE.RectAreaLight(0xa259ff, 8, 3); // color, width, height
    l.intensity = 5;
    return l;
  }, []);

  return (
    <>
      <spotLight
        position={[2, 5, 6]}
        intensity={100}
        angle={0.15}
        penumbra={0.35}
        color="white"
      />
      <spotLight
        position={[4, 5, 4]}
        intensity={40}
        angle={0.33}
        penumbra={0.5}
        color="#4cc9f0"
      />
      <spotLight
        position={[-3, 5, 5]}
        intensity={60}
        angle={0.43}
        penumbra={1}
        color="navajowhite"
      />

      <primitive
        object={areaLight}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
      />
      <pointLight position={[0, 1, 0]} intensity={10} color="#7209b7" />
      <pointLight position={[1, 2, -2]} intensity={10} color="#0d00a4" />
    </>
  );
};

export default HeroLights;
