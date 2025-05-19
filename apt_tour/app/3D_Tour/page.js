// app/3D_Tour/page.js
'use client';

import dynamic from 'next/dynamic';
import Dropdown from '../components/Dropdown';
import Blurbs from '../components/Blurbs';
import { fullBlurbs } from '../components/BlurbData';

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false
});

export default function TourPage() {
  return (
    <div className="relative bg-[#6a6e6a] flex text-left h-full">
      <div className="w-1/4 flex flex-col overflow-scroll items-center h-full p-2 z-10 text-white">
        <h2>Full Apartment</h2>
        <Blurbs fullBlurbs={fullBlurbs}/>
      </div>
      <Scene scene_name={"./Full_Apartment.glb"} fullBlurbs={fullBlurbs}/>
    </div>
  );
}
