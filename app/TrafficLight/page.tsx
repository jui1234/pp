'use client'

import { useEffect, useState, useRef } from "react";

const TrafficLight = function () {

    const [Color, setColor] = useState('');

    let lights = ['Red', 'yellow', 'Green'];

    let index = useRef(0);

    useEffect(() => {

        console.log("is running");

        let timer = setInterval(() => {

            console.log("lights", lights[index.current]);

            setColor(lights[index.current]);

            index.current++;

            if (index.current === lights.length) {
                index.current = 0;
            }

        }, 2000);

        return () => {
            clearInterval(timer);
        };

    }, []);

    return (
        <>
            <div
                style={{
                    color: Color,
                    width: '50px',
                    height: '50px'
                }}
            >
                {Color}
            </div>
        </>
    )
}

export default TrafficLight;