import { useGLTF } from "@react-three/drei";
import porcelain from "../../assets/item/porcelain.glb";

export default function Porcelain({ position }: { position: number[] }) {
  // Load your GLB file (make sure it's in the /public folder)
  const { scene } = useGLTF(porcelain); // change path accordingly

  // Model menghadap ke kanan karena rotasi Y = Math.PI / 2 (90 derajat)
  // Untuk menghadap ke depan, gunakan rotasi Y = 0
  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, 0, 0]}
      scale={1.7}
      castShadow
      receiveShadow
    />
  );
}
