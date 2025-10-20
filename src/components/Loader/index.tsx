import { Html, useProgress } from "@react-three/drei";

// small loader component (shows loading percent)
export default function Loader() {
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
