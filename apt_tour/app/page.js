// app/page.tsx
'use client';

export default function HomePage() {
  return (
    <main className="w-screen h-screen">
      <a-scene embedded>
        <a-entity position="1 0.1 0">
          <a-camera wasd-controls-enabled="true" look-controls-enabled="true"></a-camera>
        </a-entity>

        <a-entity light="type: ambient; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; intensity: 1" position="1 3 2"></a-entity>

        <a-entity gltf-model="/Room_Cleaned.glb" position="0 1.5 0" scale="1 1 1"></a-entity>
        <a-plane rotation="-90 0 0" width="30" height="30" color="#ccc"></a-plane>
      </a-scene>
    </main>
  );
}
