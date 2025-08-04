"use client"
import React, { useEffect, useRef } from 'react';

const Counter = ({ target }) => {
    const ref = useRef();
    
    useEffect(() => {
        let start = 0;
        const duration = 2000; // 2 seconds
        const stepTime = 1000 / 60; // ~60fps
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const value = Math.floor(progress * target);
            if (ref.current) {
                ref.current.textContent = value;
            }

            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    }, [target]);

    return <p ref={ref} className="number">0</p>;
};
export default Counter;