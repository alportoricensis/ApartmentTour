 // app/components/Blurb.js
'use client';
import { useState, useEffect } from 'react';
import Blurb from '../components/Blurb';

export default function Blurbs({ currModel, fullBlurbs }) {
  const [blurbs, setBlurbs] = useState([]);

  useEffect(() => {
    if (currModel === "./Living_Room_Photosphere_1.glb") {
      setBlurbs(fullBlurbs[0]);
    }
    else if (currModel === "./Room_Photosphere.glb") {
      setBlurbs(fullBlurbs[1]);
    }
    else if (currModel === "./Living_Room_Photosphere_2.glb") {
      setBlurbs(fullBlurbs[2]);
    } else {
      setBlurbs([...fullBlurbs[0], ...fullBlurbs[1], ...fullBlurbs[2]])
    }
  }, [currModel, fullBlurbs])

  return (
    <div>
        {blurbs.map((blurb, idx) => (
          <Blurb text={blurb.text} title={blurb.title + " " + blurb.label_360} key={idx} />
        ))}
    </div>
  );
}
