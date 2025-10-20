import { useThree, useFrame } from "@react-three/fiber";

function CameraMover() {
  const { camera } = useThree();

  useFrame(({ clock }) => {
    // Make camera slowly orbit around the scene
    const t = clock.getElapsedTime();
    camera.position.x = Math.sin(t) * 10;
    camera.position.z = Math.cos(t) * 10;
    camera.lookAt(0, 0, 0);
  });

  return null;
}
export default CameraMover;
