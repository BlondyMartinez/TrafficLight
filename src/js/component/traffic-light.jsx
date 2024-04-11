import React from "react";

const TrafficLight = (props) => {
	const handleLightClick = (position) => {
		props.onSelectPosition(position);
	};

	return(
		<div className="d-flex flex-column align-items-center justify-content-center">
			<div className="traffic-light d-flex flex-column gap-4">
				<div
					className={`light ${props.selectedPosition.top ? 'turned-on' : ''} ${props.selectedColors.top}`}
					onClick={() => handleLightClick('top')}
				></div>
				<div
					className={`light ${props.selectedPosition.mid ? 'turned-on' : ''} ${props.selectedColors.mid}`}
					onClick={() => handleLightClick('mid')}
				></div>
				<div
					className={`light ${props.selectedPosition.bottom ? 'turned-on' : ''} ${props.selectedColors.bottom}`}
					onClick={() => handleLightClick('bottom')}
				></div>
			</div>
			<div className="bar"></div>
		</div>
	)
}

export default TrafficLight;

