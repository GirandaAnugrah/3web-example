import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import color from "../../assets/materials/wall/Plastic017A_1K-JPG_Color.jpg";
import normalGl from "../../assets/materials/wall/Plastic017A_1K-JPG_NormalGL.jpg";
import roughness from "../../assets/materials/wall/Plastic017A_1K-JPG_Roughness.jpg";

function Wall({
  position,
  rotation,
}: {
  position?: [number, number, number];
  rotation?: [number, number, number];
}) {
  const [colorMap, normalMap, roughnessMap] = useTexture([
    color,
    normalGl,
    roughness,
  ]);

  // Optional tiling
  colorMap.wrapS = colorMap.wrapT = THREE.RepeatWrapping;
  normalMap.wrapS = normalMap.wrapT = THREE.RepeatWrapping;
  roughnessMap.wrapS = roughnessMap.wrapT = THREE.RepeatWrapping;
  colorMap.repeat.set(4, 4);
  normalMap.repeat.set(4, 4);
  roughnessMap.repeat.set(4, 4);

  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      <planeGeometry args={[12, 4.5]} /> {/* extra segments for displacement */}
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        roughness={0.5}
        metalness={0.2}
      />
    </mesh>
  );
}

export default Wall;
