import React, { useEffect, useRef } from "react";
import * as THREE from 'three'
import GLOBE from 'vanta/dist/vanta.globe.min.js'


const VantaBg = ({children}) => {
    const vantaRef = useRef(null);

    useEffect(() => {
        const vantaEffect = GLOBE({
            el: vantaRef.current,
            THREE,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            scaleMobile: 1.00,
            backgroundColor: 0x23153c,
            color: 0x960096,
            size: 0,

        });
        return () => {
            if (vantaEffect) vantaEffect.destroy();
        };
    },[]);



    return (
        <section
            ref={vantaRef}
            className="w-full h-dvh relative">

            {/* gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-blue-900/40 to-transparent z-10 bg-[var(--dark-color)]/70 w-full">
            </div>

            {/* Routed children */}
            <div className="relative z-20 w-full h-full text-[var(--light-color)] overflow-y-auto">
                {children}
            </div>
        </section>
    )
}

export default VantaBg