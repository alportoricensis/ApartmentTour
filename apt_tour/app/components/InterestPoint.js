// app/components/InterestPoint.js
'use client';


export default function InterestPoint({ label, position }) {
    return (
        <a-entity position={position}>
          <a-sphere 
            radius="0.02"
            color="green"
            class="interest-point"
            material="shader: flat"
            animation__pulse="property: scale; dir: alternate; dur: 800; loop: true; to: 1.3 1.3 1.3"
          />
          <a-text
            position="0 0.15 0"
            align="center"
            color="green"
            width="2"
            value={label}
            side="double"
            look-at="0 0 0"
          />
        </a-entity>
    );
}
