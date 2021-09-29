import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';
import aImg from '../img/PavingStones057_1K-JPG/PavingStones057_1K_AmbientOcclusion.jpg';
import cImg from '../img/PavingStones057_1K-JPG/PavingStones057_1K_Color.jpg';
import dImg from '../img/PavingStones057_1K-JPG/PavingStones057_1K_Displacement.jpg';
import nImg from '../img/PavingStones057_1K-JPG/PavingStones057_1K_NormalGL.jpg';
import rImg from '../img/PavingStones057_1K-JPG/PavingStones057_1K_Roughness.jpg';

export const Plane = () => {
  const [colorMap, displacementMap, normalMap, roughnessMap, aoMap] = useLoader(TextureLoader, [
    cImg,
    dImg,
    nImg,
    rImg,
    aImg,
  ]);

  const textures = [colorMap, displacementMap, normalMap, roughnessMap];
  textures.forEach((el) => {
    el.wrapS = el.wrapT = THREE.RepeatWrapping;
    el.repeat.set(4, 4);
  });

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <meshPhongMaterial
        attach="material"
        map={colorMap}
        displacementMap={displacementMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  );
};
