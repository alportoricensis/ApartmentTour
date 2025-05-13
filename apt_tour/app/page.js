// app/page.tsx
'use client';

import dynamic from 'next/dynamic';

const RotatingScene = dynamic(() => import('./components/RotatingScene'), {
  ssr: false
});

export default function HomePage() {
  return (
    <div className="relative h-screen w-screen bg-white text-center flex text-left">
      <div className="flex-1 flex flex-col justify-center p-12 z-10 text-black">
        <h1 className="text-7xl font-bold justify-left">Welcome to my apartment!</h1>
        <p className="mt-4 text-3xl">A technical showcase made for the ZEUS laser facility</p>
      </div>
      <div className='flex-1 relative'>
        <RotatingScene scene_name={"./Full_Apartment.glb"}/>
      </div>
    </div>
  );
}
