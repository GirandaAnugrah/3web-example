import { useGLTF } from "@react-three/drei";
import anime from "../../assets/item/cute_girl_character.glb";

export default function Character({ position }: { position: number[] }) {
  const { scene } = useGLTF(anime); // change path accordingly
  return (
    <primitive
      object={scene}
      position={position}
      rotation={[0, 0, 0]}
      scale={0.5}
      castShadow
      receiveShadow
    />
  );
}
