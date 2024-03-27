import React, { useState } from "react";

const TrafficLight = () => {
	const [lights, setLights] = useState({
		top: true,
		mid: false,
		bottom: false
	})

	const handleLightClick = (position) => {
		const updatedLights = {};

		Object.keys(lights).forEach((key) => {
		  updatedLights[key] = key === position;
		});

		setLights(updatedLights);
	};
	

	return(
		<div className=" fixed-bottom d-flex flex-column justify-content-center align-items-center">
			<div className="traffic-light d-flex flex-column gap-4">
				<div
					className={`light ${lights.top ? 'turned-on' : ''} red`}
					onClick={() => handleLightClick('top')}
				></div>
				<div
					className={`light ${lights.mid ? 'turned-on' : ''} yellow`}
					onClick={() => handleLightClick('mid')}
				></div>
				<div
					className={`light ${lights.bottom ? 'turned-on' : 'turned-off'} green`}
					onClick={() => handleLightClick('bottom')}
				></div>
			</div>
			<div className="bar"></div>
		</div>
	)
}

export default TrafficLight;

