// app/components/Blurb.js
'use client';

export default function Blurb({ title, text }) {
  return (
    <div>
        <div className="bg-[#1e201e] rounded-lg p-2 shadow-xl/30">
            <h3 className="text-bold">{title}</h3>
            <p>{text}</p>
        </div>
        <br></br>
    </div>
  );
}
