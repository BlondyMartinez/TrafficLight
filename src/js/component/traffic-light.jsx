import React from "react";

const TrafficLight = () => {
	return(
		<div className=" fixed-bottom d-flex flex-column justify-content-center align-items-center">
			<div className="traffic-light d-flex flex-column gap-4">
				<div className="light turned-on red"></div>
				<div className="light turned-off yellow"></div>
				<div className="light turned-off green"></div>
			</div>
			<div className="bar"></div>
		</div>
	)
}

export default TrafficLight;

