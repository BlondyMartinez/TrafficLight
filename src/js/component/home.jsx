import React, { useState } from "react";
import TrafficLight from "./traffic-light";
import TrafficLightController from "./traffic-light-controller";

const Home = () => {
	const [selectedColors, setSelectedColors] = useState({
        top: 'red',
        mid: 'yellow',
        bottom: 'green'
    });

    const onSelectColor = (color, identifier) => {
        setSelectedColors(prevSelectedColors => ({
            ...prevSelectedColors,
            [identifier]: color
        }));
    };
    
    return (
        <>
            <TrafficLight selectedColors={selectedColors} />
            <TrafficLightController selectedColors={selectedColors} onSelectColor={onSelectColor} />
        </>
    );
};

export default Home;