import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import * as THREE from 'three';
import './App.css';
import emotionImg from './img/emotionjs.png';
import gatsbyImg from './img/GatsbyImg.png';
import jsImg from './img/js-logo-small.png';
import nextImg from './img/next.png';
import reactImg from './img/react-small.png';
import scssImg from './img/sass.png';
import styledImg from './img/styled.png';
import ts from './img/typescript.jpeg';
import { Controls } from './Three/Controls';
import { Loader } from './Three/Loader';
import { Plane } from './Three/Plane';
import { StaticBox } from './Three/StaticBox';

function App() {
  const sm = 0.8;
  return (
    <>
      <Canvas
        mode="concurrent"
        camera={{ position: [0, 2, 4] }}
        onCreated={({ gl }) => {
          gl.shadowMap.enabled = true;
          gl.shadowMap.type = THREE.PCFSoftShadowMap;
        }}
      >
        <Suspense fallback={<Loader />}>
          <Controls />
          <fog attach="fog" args={['white', 4, 10]} />
          <ambientLight intensity={0.08} />
          <spotLight intensity={0.5} position={[0, 5, 10]} penumbra={1} castShadow />
          <Plane />
          <StaticBox rotation={[0, 0.4, 0]} position={[0, 2, 0]} img={reactImg} scale={1} />
          <StaticBox rotation={[0, 2, 0]} position={[0, 1, -0.3]} img={nextImg} scale={1} />
          <StaticBox position={[0, 0, 0]} img={gatsbyImg} scale={1} />
          <StaticBox position={[1.2, 0, 0.6]} img={ts} scale={1} />
          <StaticBox
            rotation={[0, 0.8, 0]}
            position={[-0.4, 0.7, -1.6]}
            img={emotionImg}
            scale={sm}
          />
          <StaticBox rotation={[0, 0.8, 0]} position={[0, -0.1, -1.4]} img={scssImg} scale={sm} />
          <StaticBox
            rotation={[0, -0.2, 0]}
            position={[-1.1, -0.1, -1.6]}
            img={styledImg}
            scale={sm}
          />
          <StaticBox rotation={[0, 0.1, 0]} position={[-1.5, 0, -0.4]} img={jsImg} scale={1} />
        </Suspense>
      </Canvas>
      <h1>My core dev stack</h1>
      <p>Click left mouse button and move to rotate boxes.</p>
    </>
  );
}

export default App;
