// app/3D_Tour/page.js
'use client';

import dynamic from 'next/dynamic';

const Scene = dynamic(() => import('../components/Scene'), {
  ssr: false
});

export default function TourPage() {
  return (
    <div className="relative w-screen bg-white flex text-left h-full">
      <div className="w-1/4 justify-center p-12 z-10 text-black">
        Placeholder
      </div>
      <div className='w-3/4'>
        <Scene scene_name={"./Full_Apartment.glb"}/>
      </div>
    </div>
  );
}
