import React, { useState } from "react";

const LightCycle = (props) => {
    const [cycleMode, setCycleMode] = useState(false);
    const [cycleIntervalId, setCycleIntervalId] = useState(null);

    const handleClick = () => {
        setCycleMode(!cycleMode);
		if (cycleMode) {
            clearInterval(cycleIntervalId);
        } else { 
            const positions = ['top', 'mid', 'bottom'];
            let index = 0;
            const intervalId = setInterval(() => {
                props.onSelectPosition(positions[index]);
                index = (index + 1) % positions.length;
            }, 1000); 
            setCycleIntervalId(intervalId);
        }
	};

    return ( 
        <div className="p-2 m-4">
            <button className={`btn w-100 ${cycleMode ? 'btn-selected' : ''}`} onClick={() => handleClick()}>Light Cycle</button>
        </div>
    )
}

export default LightCycle;