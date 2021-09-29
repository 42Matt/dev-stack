import { a, useSpring } from '@react-spring/three'; // a -animated
import { useLoader } from '@react-three/fiber';
import React, { useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export const AnimatedBox = (props, { img, x = 1.4, y = 1.4, z = 1.4 }) => {
  const [_, setHovered] = useState(false);
  const [active, setActive] = useState(false);
  //const meshRef = useRef();
  const colorMap = useLoader(TextureLoader, props.img);
  const spring = useSpring({
    scale: active ? [0.6, 0.6, 0.6] : [1, 1, 1],
  });

  // useFrame(() => {
  //   meshRef.current.rotation.y += 0.01;
  // });

  return (
    <a.mesh
      {...props}
      //ref={meshRef}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => setActive(!active)}
      scale={spring.scale}
      castShadow
    >
      <boxBufferGeometry attach="geometry" args={[props.x, props.y, props.z]} />

      {/* <a.meshPhongMaterial attach="material" color={spring.color} /> */}
      <a.meshPhongMaterial attach="material" map={colorMap} />
    </a.mesh>
  );
};
