// app/About/page.js
'use client';

import Image from 'next/image';


export default function HomePage() {
  return (
    <div>
      <div className="relative h-screen w-auto p-7 bg-white text-black text-center flex-col text-left">
          <h1 className="text-7xl font-bold justify-left">About</h1>
          <div className="flex flex-row flex-wrap gap-8 items-start max-w-full">
            <p className="flex-1 min-w-0 text-3xl mt-4">
              This interactive technical demo was built as a proof of concept for the ZEUS Laser Facility Programmer I 
              position. The 3D environment was captured using an iPhone 16 Pro Max (LiDAR + 360 imaging via Polycam), 
              cleaned and processed in Blender, and presented using A-Frame for browser-based VR interaction. The site
              is powered by Next.js and React, with each room and object annotated through dynamic routing and component-driven UI.
              Along the way, you&#39;ll find interactive blurbs highlighting some of my interests — from biking to 3D printing 
              — woven into the virtual space as both technical and personal storytelling elements.</p>
              <Image src="/Headshot.jpeg" alt="Headshot (me!)" width={300} height={300} className="rounded-lg max-w-[300px] w-full h-auto"/>
            </div>
      </div>
    </div>
  );
}
