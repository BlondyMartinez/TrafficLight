import React, { useState, useEffect } from "react";

const ColorPicker = (props) => {
    const [color, setColor] = useState({
		red: false,
        orange: false,
		yellow: false,
		green: false,
		blue: false,
		purple: false,
		pink: false,
        rainbow: false
	});

    const [rainbowIntervalId, setRainbowIntervalId] = useState(null);
    const [rainbowMode, setRainbowMode] = useState(false);

	const handleColorClick = (selectedColor) => {
        if (selectedColor === 'rainbow') rainbowWaveMode();
        else colorMode(selectedColor);
    };

    useEffect(() => {
        setColor(prevColors => ({
            ...prevColors,
            [props.initialSelected]: true
        }));
    }, [props.initialSelected]);

    function rainbowWaveMode() {
        setRainbowMode(true);
        const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
        let index = 0;
        const intervalId = setInterval(() => {
            props.onSelectColor(colors[index], props.identifier);
            index = (index + 1) % colors.length;
        }, 1000); 
        setRainbowIntervalId(intervalId);
    }

    function colorMode(selectedColor){
        setRainbowMode(false);
        setColor(prevColors => {
            const updatedColors = {};
            for (const color in prevColors) {
                updatedColors[color] = color === selectedColor;
            }
            return updatedColors;
        });
        clearInterval(rainbowIntervalId);
        props.onSelectColor(selectedColor, props.identifier);
    }

    return(
        <div className="color-section p-2 m-4">
            <div>
                <span 
                    className={`red color-option ${color.red && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('red')}
                >⬤ </span>
                <span 
                    className={`orange color-option ${color.orange && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('orange')}
                >⬤ </span>
                <span 
                    className={`yellow color-option ${color.yellow && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('yellow')}
                >⬤ </span>
                <span 
                    className={`green color-option ${color.green && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('green')}
                >⬤ </span>
                <span 
                    className={`blue color-option ${color.blue && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('blue')}
                >⬤ </span>
                <span 
                    className={`purple color-option ${color.purple && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('purple')}
                >⬤ </span>
                <span 
                    className={`pink color-option ${color.pink && !rainbowMode ? 'selected' : ''}`}
                    onClick={() => handleColorClick('pink')}
                >⬤ </span>
                
                <span 
                    className={`color-option ${rainbowMode ? 'rainbow' : ''}`}
                    onClick={() => handleColorClick('rainbow')}
                    ><i className="fa-solid fa-rainbow"></i></span>
            </div>
        </div>
	)
}

export default ColorPicker;