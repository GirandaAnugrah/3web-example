import { useGLTF } from "@react-three/drei";
import woodentable from "../../assets/item/wooden_table.glb";
import type { GLTFResult } from "../../types/glb";

export default function WoodenTable({ position }: { position: number[] }) {
  // Load your GLB file (make sure it's in the /public folder)
  const { scene } = useGLTF(woodentable) as GLTFResult; // change path accordingly

  // Model menghadap ke kanan karena rotasi Y = Math.PI / 2 (90 derajat)
  // Untuk menghadap ke depan, gunakan rotasi Y = 0
  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, 0, 0]}
      scale={1.6}
      castShadow
      receiveShadow
    />
  );
}
