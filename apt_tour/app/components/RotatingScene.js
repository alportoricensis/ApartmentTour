// app/components/RotatingScene.js
'use client';

export default function Scene({ scene_name }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0">
      <a-scene background="transparent: true" renderer="alpha: true" embedded>
        <a-entity position="9 1 2" rotation="0 45 0">
            <a-camera look-controls="enabled: true" wasd-controls-enabled="false"/>
        </a-entity>
        <a-entity light="type: ambient; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; intensity: 1" position="1 3 2"></a-entity>

        <a-entity 
            gltf-model={scene_name}
            position="4 2 -3"
            rotation="0 0 0"
            scale="0.65 0.65 0.65"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
        />
      </a-scene>
    </div>
  );
}
