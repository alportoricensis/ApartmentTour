// app/components/Waypoint.js
'use client';

import { useRef, useEffect } from 'react';


export default function Waypoint3D({ camRef, position }) {
    const waypointRef = useRef();

    useEffect(() => {
        const elt = waypointRef.current;
        if (!elt) {
            return
        }
        const handleClick = () => {
            camRef.current.setAttribute('animation', {
                property: 'position',
                to: position,
                dur: 1000,
                easing: 'easeInOutQuad'
            });
        }
        if (elt) {
            elt.addEventListener('click', handleClick);
        }
    }, [camRef, position]);

    return (
        <a-sphere
            ref={waypointRef}
            position={position}
            radius={0.1}
            color="white"
            class="clickable"
            animation__pulse="property: scale; dir: alternate; dur: 800; loop: true; to: 1.3 1.3 1.3">
        </a-sphere>
    );
}
