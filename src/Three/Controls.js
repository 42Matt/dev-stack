import { extend, useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

export const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  useFrame(() => {
    orbitRef.current.update();
  });

  return (
    <orbitControls
      autoRotate
      maxPolarAngle={Math.PI / 2}
      minPolarAngle={Math.PI / 4}
      ref={orbitRef}
      args={[camera, gl.domElement]}
    />
  );
};
