// app/components/Scene.js
'use client';

export default function Scene({ scene_name }) {
  return (
    <a-scene embedded>
      <a-entity position="-4 0 -2" rotation="0 205 0">
        <a-camera wasd-controls-enabled="true" look-controls-enabled="true"></a-camera>
      </a-entity>

      <a-entity light="type: ambient; intensity: 0.5"></a-entity>
      <a-entity light="type: directional; intensity: 1" position="1 3 2"></a-entity>

      <a-entity gltf-model={scene_name} position="0 1.5 0" scale="1 1 1"></a-entity>
      <a-plane rotation="-90 0 0" width="30" height="30" color="#ccc"></a-plane>
    </a-scene>
  );
}
