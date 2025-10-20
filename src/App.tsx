import React from "react";
import { Canvas } from "@react-three/fiber";
import VirtualBooth from "./components/VirtualBooth";

const App: React.FC = () => {
  return (
    // <div
    //   style={{
    //     height: "100vh",
    //     width: "100vw",
    //     backgroundColor: "#fdfdfd",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <Canvas>
    //     <mesh position={[-3, 0, -3]}>
    //       <boxGeometry args={[2, 2, 2]} />
    //       <meshStandardMaterial color="blue" />
    //     </mesh>
    //     <mesh position={[3, 0, -2]}>
    //       <boxGeometry args={[2, 2, 2]} />
    //       <meshStandardMaterial color="blue" />
    //     </mesh>
    //     <ambientLight intensity={0.5} />
    //     <directionalLight position={[0, 5, 5]} intensity={1} />
    //   </Canvas>
    // </div>
    <VirtualBooth />
  );
};

export default App;
