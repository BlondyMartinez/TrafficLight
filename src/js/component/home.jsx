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

    const [selectedPosition, setSelectedPosition] = useState({
        top: true,
        mid: false,
        bottom: false
    });

    const onSelectPosition = (position) => {
        const updatedPositions = {};

		Object.keys(selectedPosition).forEach((key) => {
		  updatedPositions[key] = key === position;
		});

		setSelectedPosition(updatedPositions);
    };
    
    return (
        <>
            <Billboard />
            <TrafficLight selectedColors={selectedColors} selectedPosition={selectedPosition} onSelectPosition={onSelectPosition} />
            <TrafficLightController selectedColors={selectedColors} onSelectColor={onSelectColor} selectedPosition={selectedPosition} onSelectPosition={onSelectPosition} />
        </>
    );
};

export default Home;