import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Html,
  ContactShadows,
  useProgress,
  Preload,
  useTexture,
  PerspectiveCamera,
} from "@react-three/drei";
import logo from "../assets/logo-emos-full-white.png";
import MarbleFloor from "./Floor";
import Wall from "./Wall";
import SmoothZoomToTarget from "./SmoothZoom";
import Porcelain from "./items/Porcelain";
import Plant from "./items/Plant";
import WoodenTable from "./items/WoodenTable";
import Shelf from "./items/Shelf";
import Overground from "./items/Overground";
import Laptop from "./items/Laptop";
import DeskItem from "./items/DeskItem";
import Character from "./items/Character";

// small loader component (shows loading percent)
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div
        style={{
          padding: 12,
          background: "rgba(255,255,255,0.95)",
          borderRadius: 8,
          textAlign: "center",
        }}
      >
        <div style={{ fontWeight: 700 }}>Loading booth...</div>
        <div style={{ marginTop: 6 }}>{Math.round(progress)}%</div>
      </div>
    </Html>
  );
}

function BoothRoom() {
  const logoTexture = useTexture(logo);
  return (
    <group>
      {/* Lamp (ceiling light) */}
      <mesh position={[0, 4.3, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.15, 32]} />
        <meshStandardMaterial
          color="white"
          emissive="white"
          emissiveIntensity={1}
        />
      </mesh>
      <pointLight
        position={[0, 4.25, 0]}
        intensity={8}
        color="white"
        distance={8}
        castShadow
      />
      {/* Floor */}
      <MarbleFloor />

      {/* Back wall */}
      <Wall position={[0, 2.2, -6]} />

      {/* Logo */}
      <mesh
        position={[0, 2.2, -5.99]} // slightly in front of the wall (−5.99 vs −6)
        rotation={[0, 0, 0]}
      >
        <planeGeometry args={[7, 2]} /> {/* adjust size of logo plane */}
        <meshBasicMaterial map={logoTexture} transparent />
      </mesh>

      {/* Left wall */}
      <Wall position={[-6, 2.2, 0]} rotation={[0, Math.PI / 2, 0]} />

      {/* Right wall */}
      <Wall position={[6, 2.2, 0]} rotation={[0, -Math.PI / 2, 0]} />

      {/* Ceiling */}
      <mesh position={[0, 4.4, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[12, 12]} />
        <meshStandardMaterial color="#fffff" />
      </mesh>

      <Plant position={[5, 0, -4]} />

      <WoodenTable position={[0, 0, 0]} />

      <Porcelain position={[0, 1.6, 0]} />

      <Shelf position={[-4.5, 0, -5.5]} />

      <Overground position={[4.7, 2.1, 2.8]} />
      <Laptop position={[4, 0.4, 22]} />
    </group>
  );
}

export default function VirtualBooth() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        background: "#eef2ff",
      }}
    >
      {/* Top UI bar */}
      <div style={{ position: "absolute", top: 12, left: 12, zIndex: 20 }}>
        <div
          style={{
            padding: "8px 12px",
            background: "white",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
          }}
        >
          <div style={{ fontWeight: 800 }}>
            Virtual Booth — Perusahaan Farmasi
          </div>
          <div style={{ fontSize: 12, opacity: 0.8 }}>
            Klik produk untuk melihat detail. Gunakan mouse untuk pan & zoom.
          </div>
        </div>
      </div>

      {/* Right-side admin mini dashboard */}
      <div style={{ position: "absolute", right: 12, top: 12, zIndex: 20 }}>
        <div
          style={{
            padding: "8px 12px",
            background: "white",
            borderRadius: 8,
            boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
            width: 220,
          }}
        >
          <div style={{ fontWeight: 700 }}>Admin Panel</div>
          <div style={{ fontSize: 12, marginTop: 8 }}>
            Pengunjung: <strong>—</strong>
          </div>
          <div style={{ fontSize: 12 }}>
            Interaksi Produk: <strong>—</strong>
          </div>
          <div style={{ marginTop: 8 }}>
            <button
              onClick={() => alert("Tampilkan statistik (mock)")}
              style={{
                width: "100%",
                padding: "8px 10px",
                borderRadius: 6,
                border: "none",
                background: "#0b4bff",
                color: "white",
                fontWeight: 700,
              }}
            >
              Lihat Statistik
            </button>
          </div>
        </div>
      </div>

      {/* Canvas */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[0, 4, 10.1]} fov={45} />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={2.4} />
          <directionalLight
            castShadow
            position={[5, 8, 5]}
            intensity={0.8}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <BoothRoom />

          {/* <Suspense fallback={null}>
            <Character position={[-4, 0, 5]} />
          </Suspense> */}

          <Suspense fallback={null}>
            <DeskItem position={[5, 1.8, 4]} />
          </Suspense>

          {/* <Product onSelect={handleSelect} /> */}

          <SmoothZoomToTarget
            onClick={() => setSelected(!selected)}
            targetPosition={[-4, 0, 5]}
          >
            <Suspense fallback={null}>
              <Character position={[0, 0, 0]} />
            </Suspense>
          </SmoothZoomToTarget>

          <ContactShadows
            position={[0, 0.01, 0]}
            opacity={0.6}
            width={4}
            blur={2}
            far={4}
          />

          <OrbitControls maxPolarAngle={Math.PI / 2.2} />

          <Preload all />
          {/* <CameraMover /> */}
        </Suspense>
      </Canvas>

      {/* Centered Modal Example */}
      {selected && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 120,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 100,
            pointerEvents: "none", // allow canvas interaction unless modal is active
          }}
        >
          <div
            style={{
              minWidth: 320,
              minHeight: 180,
              background: "white",
              borderRadius: 12,
              boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
              padding: 32,
              display: "flex",
              flexDirection: "column",
              maxWidth: "30vw",
              pointerEvents: "auto", // enable interaction inside modal
            }}
          >
            <p style={{ fontSize: 16, fontWeight: 800, marginBottom: 12 }}>
              Since its launch in 2016, EMOS has been used by various sales
              channels including pharmacies, hospitals, clinics, drug stores,
              mini markets, milk shops, baby goods stores and grocery stores
              throughout Indonesia. PT EMOS GLOBAL DIGITAL already has EMOS
              which is prepared to develop a digital platform for inter-business
              health product distribution (B2B), especially starting with a
              network of pharmacies throughout Indonesia. With this application,
              it is hoped that health distribution services can be faster and
              more efficient with good quality. In the future, this digital
              platform will become a supply chain ecosystem for health products
              that can be utilized by all business actors in the health
              industry.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
