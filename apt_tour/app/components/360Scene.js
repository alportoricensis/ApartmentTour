// app/components/360Scene.js
'use client';

export default function Scene360({ scene_name }) {
  return (
    <a-scene embedded>
        <a-entity position="0 -1 0" rotation="0 0 0">
            <a-camera wasd-controls-enabled="false" look-controls-enabled="true"></a-camera>
        </a-entity>
        <a-entity gltf-model={scene_name} material="side: double" position="0 0 0" scale="1 1 1"/>
        <a-entity light="type: point; intensity: 6; distance: 100; decay: 1" position="0 0.5 0"></a-entity>
    </a-scene>
  );
}
