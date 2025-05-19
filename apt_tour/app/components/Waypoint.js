// app/components/Waypoint.js
'use client';

import { useRef, useEffect } from 'react';


export default function Waypoint({ setCurrModel, position, model, currModel }) {
    const waypointRef = useRef();

    useEffect(() => {
        const elt = waypointRef.current;
        if (!elt) {
            return
        }

        const handleClick = () => {
            console.log("Ran the click")
            setCurrModel(model);
        }
        if (elt) {
            elt.addEventListener('click', handleClick);
            elt.setAttribute('visible', currModel !== model);
        }
    }, [setCurrModel, currModel, model]);

    return (
        <a-sphere
            ref={waypointRef}
            position={position}
            radius={0.05}
            color="white"
            class="clickable"
            animation__pulse="property: scale; dir: alternate; dur: 800; loop: true; to: 1.3 1.3 1.3">
        </a-sphere>
    );
}
