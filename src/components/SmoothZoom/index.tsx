// App.jsx
import { useFrame, useThree } from "@react-three/fiber";
import { useSpring } from "@react-spring/three";
import { useState } from "react";
import type { OrbitControls } from "three/examples/jsm/Addons.js";

// === Your Smooth Zoom Component ===
function SmoothZoomToTarget({
  children,
  targetPosition = [0, 0, 0],
  onClick,
}: {
  children: React.ReactNode;
  targetPosition?: [number, number, number];
  onClick?: () => void;
}) {
  const { camera, controls } = useThree();
  const orbit = controls as unknown as OrbitControls;
  const [active, setActive] = useState(false);

  const { position } = useSpring({
    position: active ? [-4.3, 3.3, 8] : [0, 4, 10],
    config: { mass: 1, tension: 110, friction: 26 },
  });

  useFrame(() => {
    // Smoothly move camera position
    camera.position.lerp(
      { x: position.get()[0], y: position.get()[1], z: position.get()[2] },
      0.1
    );
    // Smoothly move controls target
    orbit?.target.lerp(
      { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
      0.1
    );
    orbit?.update();
  });

  return (
    <mesh
      position={targetPosition}
      onClick={() => {
        setActive(!active);
        onClick?.();
      }}
    >
      {/* <sphereGeometry args={[0.2]} /> */}
      {children}
      {/* <meshStandardMaterial color={active ? "orange" : "blue"} /> */}
    </mesh>
  );
}

export default SmoothZoomToTarget;
