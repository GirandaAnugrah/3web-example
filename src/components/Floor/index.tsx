import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import color from "../../assets/materials/floor/Marble021_1K-JPG_Color.jpg";
import normalGl from "../../assets/materials/floor/Marble021_1K-JPG_NormalGL.jpg";
import roughness from "../../assets/materials/floor/Marble021_1K-JPG_Roughness.jpg";

function MarbleFloor() {
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
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <planeGeometry args={[12, 17, 256, 256]} />{" "}
      {/* extra segments for displacement */}
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

export default MarbleFloor;
