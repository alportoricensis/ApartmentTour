// app/3D_Tour/page.js
'use client';
import React, { useState, useEffect } from 'react';
import Blurbs from '../components/Blurbs';
import { fullBlurbs } from '../components/BlurbData';
import Dropdown from '../components/Dropdown';
import dynamic from 'next/dynamic';

const Scene360 = dynamic(() => import('../components/360Scene'), {
  ssr: false
});

export default function TourPage() {
  const [currModel, setCurrModel] = useState("./Living_Room_Photosphere_1.glb");

  return (
    <div className="relative bg-[#6a6e6a] flex text-left h-full">
      <div className="w-1/4 flex flex-col overflow-scroll items-center h-full p-2 z-10 text-white">
        <Dropdown currModel={currModel} setModel={setCurrModel}/>
        <Blurbs currModel={currModel} fullBlurbs={fullBlurbs}/>
      </div>
      <Scene360 currModel={currModel} setCurrModel={setCurrModel} fullBlurbs={fullBlurbs}/>
    </div>
  );
}
