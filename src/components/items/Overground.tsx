import { useGLTF } from "@react-three/drei";
import overground from "../../assets/item/overgrown.glb";
import type { GLTFResult } from "../../types/glb";

export default function Overground({ position }: { position: number[] }) {
  // Load your GLB file (make sure it's in the /public folder)
  const { scene } = useGLTF(overground) as GLTFResult; // change path accordingly

  // Model menghadap ke kanan karena rotasi Y = Math.PI / 2 (90 derajat)
  // Untuk menghadap ke depan, gunakan rotasi Y = 0
  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, 0, 0]}
      scale={0.002}
      castShadow
      receiveShadow
    />
  );
}
