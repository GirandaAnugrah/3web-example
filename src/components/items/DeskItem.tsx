import { useGLTF } from "@react-three/drei";
import desk from "../../assets/item/desk.glb";

export default function DeskItem({ position }: { position: number[] }) {
  // Load your GLB file (make sure it's in the /public folder)
  const { scene } = useGLTF(desk); // change path accordingly

  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, 0, 0]}
      scale={0.22} // adjust to fit your scene
      castShadow
    />
  );
}
