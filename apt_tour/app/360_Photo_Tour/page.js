// app/3D_Tour/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Blurb from '../components/Blurb';
import dynamic from 'next/dynamic';

const Scene360 = dynamic(() => import('../components/360Scene'), {
  ssr: false
});

export default function TourPage() {
  const [currRoom, setCurrRoom] = useState("./Bedroom_Photo_Sphere.glb");

  return (
    <div className="relative bg-[#6a6e6a] flex text-left h-full">
      <div className="w-1/4 justify-center p-2 z-10 text-white">
        Living Room #1
        <Blurb 
            title="Momentum Vida" 
            text="My first ever bicycle; embarrisingly, I didn't learn how to ride a bike
                  until I moved to Michigan. Who would've thought it'd become my favorite hobby."
        ></Blurb>
        <Blurb 
            title="Ride1Up Turris" 
            text="My second bike, an e-bike. I used to ride this to and from SafeRide every time I worked."
        ></Blurb>
      </div>
      <div className='w-3/4'>
        <Scene360 scene_name={currRoom}/>
      </div>
    </div>
  );
}
