// app/components/Scene.js
'use client';

import React, { useRef } from "react";
import Waypoint3D from "./Waypoint3D";

export default function Scene({ scene_name }) {
  const camRef = useRef();
  const waypoints = [
    "-3.5 1.6 2",
    "-4 1.6 -2",
    "-0.5 1.6 -2.8",
    "1.5 1.6 -2.8",
    "-0.5 1.6 -0.5",
    "2.5 1.6 -0.5",
    "2.5 1.6 1.5",
    "4.5 1.6 3",
    "2.5 1.6 -3",
  ]

  return (
    <div className='w-3/4 outline-solid'>
      <a-scene embedded>
        <a-entity>
          <a-camera ref={camRef} look-at="0 90 0" position="-4 1.6 -2" wasd-controls-enabled="false" look-controls-enabled="true"></a-camera>
        </a-entity>
        <a-entity light="type: ambient; intensity: 0.5"></a-entity>
        <a-entity light="type: directional; intensity: 1" position="1 3 2"></a-entity>
        <a-entity gltf-model={scene_name} position="0.9 1.5 -1" rotation="0 180 0" scale="1 1 1"></a-entity>
        {waypoints.map((location, idx) => (
          <Waypoint3D camRef={camRef} position={location} key={idx}/>
        ))}
        <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
      </a-scene>
    </div>
  );
}
