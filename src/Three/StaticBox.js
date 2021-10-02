import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

export const StaticBox = (props, { img, x = 1.4, y = 1.4, z = 1.4 }) => {
  const colorMap = useLoader(TextureLoader, props.img);

  return (
    <mesh {...props} castShadow>
      <boxBufferGeometry attach="geometry" args={[props.x, props.y, props.z]} />
      <meshLambertMaterial attach="material" map={colorMap} />
    </mesh>
  );
};
