import React from "react";

const TrafficLight = () => {
	return(
		<div className="traffic-light d-flex flex-column gap-4">
            <div className="light turned-off"></div>
			<div className="light turned-off"></div>
			<div className="light turned-on"></div>
		</div>
	)
}

export default TrafficLight;