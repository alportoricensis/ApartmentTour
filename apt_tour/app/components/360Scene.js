// app/components/360Scene.js
'use client';
import { useRef, useEffect, useState } from 'react';
import Waypoint360 from './Waypoint360';
import InterestPoint from './InterestPoint';


export default function Scene360({ currModel, setCurrModel, fullBlurbs }) {
  const modelRef = useRef();
  const lightRef = useRef();
  const [blurbs, setBlurbs] = useState([]);

  useEffect(() => {
    if (currModel === "./Living_Room_Photosphere_1.glb") {
      setBlurbs(fullBlurbs[0]);
    }
    if (currModel === "./Room_Photosphere.glb") {
      setBlurbs(fullBlurbs[1]);
    }
    if (currModel === "./Living_Room_Photosphere_2.glb") {
      setBlurbs(fullBlurbs[2]);
    }
  }, [currModel, fullBlurbs])

  const hub_model = "./Living_Room_Photosphere_1.glb";
  const rooms = [
    { model: "./Living_Room_Photosphere_2.glb", position: "0.7 0.2 -0.7" },
    { model: "./Room_Photosphere.glb", position: "-0.65 0.04 -0.35" },
  ];

  useEffect(() => {
    if (!lightRef.current) return;
    let intensity;
    switch (currModel) {
      case "./Living_Room_Photosphere_1.glb":
        intensity = 8;
        break;
      case "./Living_Room_Photosphere_2.glb":
        intensity = 7;
        break;
      case "./Room_Photosphere.glb":
        intensity = 8;
        break;
      default:
        intensity = 2;
    }

    lightRef.current.setAttribute('light', {
      type: "point",
      intensity: intensity,
      distance: 100,
      decay: 1
    });
  }, [currModel]);

  useEffect(() => {
    if (currModel && modelRef.current) {
      modelRef.current.setAttribute("gltf-model", currModel);
    }
  }, [currModel]);

  return (
    <div className='w-3/4 outline-solid'>
      <a-scene embedded>
          <a-entity position="0 -1 0" rotation="0 0 0">
              <a-camera id="camera" camera look-controls="touchEnabled: true; mouseEnabled: true"></a-camera>
          </a-entity>
          <a-entity ref={modelRef} id="model-root" material="side: double" position="0 0 0" scale="1 1 1"/>
          <a-entity ref={lightRef} position="0 0.5 0"></a-entity>
          {blurbs.map((blurb, idx) => (
            <InterestPoint label={blurb.label} position={blurb.photosphere_loc} key={idx}/>
          ))}
          {currModel === hub_model && rooms.map((room, idx) => (
            <Waypoint360
              key={idx}
              model={room.model}
              position={room.position}
              currModel={currModel}
              setCurrModel={setCurrModel}
            />
          ))}
          {currModel === rooms[0].model && (
            <Waypoint360
              model={hub_model}
              position="-0.9 0.2 -0.25"
              currModel={currModel}
              setCurrModel={setCurrModel}
            />
          )}
          {currModel === rooms[1].model && (
            <Waypoint360
              model={hub_model}
              position="-0.8 0.1 0.4"
              currModel={currModel}
              setCurrModel={setCurrModel}
            />
          )}
          <a-entity cursor="rayOrigin: mouse" raycaster="objects: .clickable"></a-entity>
      </a-scene>
    </div>
  );
}
