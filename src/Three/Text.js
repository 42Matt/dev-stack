import * as THREE from 'three';

const Text = (props, { x = 1.4, y = 1.4, z = 1.4 }) => {
  const fontSlice = '';
  const font = new THREE.FontLoader().parse(fontSlice);
  const textOptions = {
    font,
    size: 0.13,
    height: 0.04,
  };
  return (
    <mesh {...props} position={[props.x, props.y, props.z]}>
      <textBufferGeometry
        attach="geometry"
        args={['CLICK LEFT MOUSE BUTTON\n AND DRAG TO ROTATE', textOptions]}
      />
      <meshBasicMaterial attach="material" color={'yellow'} />
    </mesh>
  );
};
