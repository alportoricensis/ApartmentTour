// app/components/RotatingScene.js
'use client';

export default function Scene({ scene_name }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
      <a-scene background="transparent: true" renderer="alpha: true">
        <a-entity position="-5 2 4" rotation="0 -45 0">
            <a-camera look-controls="enabled: true" wasd-controls-enabled="false"/>
        </a-entity>
        <a-entity light="type: ambient; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; intensity: 1" position="1 3 2"></a-entity>

        <a-entity 
            gltf-model={scene_name}
            position="2 2.5 0"
            rotation="0 0 0"
            scale="0.7 0.7 0.7"
            animation="property: rotation; to: 0 360 0; loop: true; dur: 15000; easing: linear"
        />
      </a-scene>
    </div>
  );
}
