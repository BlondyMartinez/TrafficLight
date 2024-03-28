import React, { useState } from "react";
import TrafficLight from "./traffic-light";
import TrafficLightController from "./traffic-light-controller";
import Billboard from "./billboard";

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
            <Billboard />
            <TrafficLight selectedColors={selectedColors} />
            <TrafficLightController selectedColors={selectedColors} onSelectColor={onSelectColor} />
        </>
    );
};

export default Home;