import React, { useState } from "react";

const TrafficLight = ({ selectedColors }) => {
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
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div className="traffic-light d-flex flex-column gap-4">
				<div
					className={`light ${lights.top ? 'turned-on' : ''} ${selectedColors.top}`}
					onClick={() => handleLightClick('top')}
				></div>
				<div
					className={`light ${lights.mid ? 'turned-on' : ''} ${selectedColors.mid}`}
					onClick={() => handleLightClick('mid')}
				></div>
				<div
					className={`light ${lights.bottom ? 'turned-on' : 'turned-off'} ${selectedColors.bottom}`}
					onClick={() => handleLightClick('bottom')}
				></div>
			</div>
			<div className="bar"></div>
		</div>
	)
}

export default TrafficLight;

