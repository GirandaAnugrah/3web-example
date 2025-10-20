import { useGLTF } from "@react-three/drei";
import laptop from "../../assets/item/laptop.glb";

export default function Laptop({ position }: { position: number[] }) {
  // Load your GLB file (make sure it's in the /public folder)
  const { scene } = useGLTF(laptop); // change path accordingly

  // Model menghadap ke kanan karena rotasi Y = Math.PI / 2 (90 derajat)
  // Untuk menghadap ke depan, gunakan rotasi Y = 0
  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, Math.PI * 2, 0]}
      scale={0.3}
      castShadow
      receiveShadow
    />
  );
}
