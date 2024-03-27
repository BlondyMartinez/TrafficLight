import React, { useState, useEffect } from "react";

const ColorPicker = (props) => {
    const [color, setColor] = useState({
		red: false,
        orange: false,
		yellow: false,
		green: false,
		blue: false,
		purple: false,
		pink: false
	})

	const handleColorClick = (selectedColor) => {
        setColor(prevColors => {
            const updatedColors = {};
            for (const color in prevColors) {
                updatedColors[color] = color === selectedColor;
            }
            return updatedColors;
        });
        props.onSelectColor(selectedColor, props.identifier);
    };

    useEffect(() => {
        setColor(prevColors => ({
            ...prevColors,
            [props.initialSelected]: true
        }));
    }, [props.initialSelected]);

    return(
        <div className="color-section p-2 m-4">
            <div>
                <span 
                    className={`red color-option ${color.red ? 'selected' : ''}`}
                    onClick={() => handleColorClick('red')}
                >⬤ </span>
                <span 
                    className={`orange color-option ${color.orange ? 'selected' : ''}`}
                    onClick={() => handleColorClick('orange')}
                >⬤ </span>
                <span 
                    className={`yellow color-option ${color.yellow ? 'selected' : ''}`}
                    onClick={() => handleColorClick('yellow')}
                >⬤ </span>
                <span 
                    className={`green color-option ${color.green ? 'selected' : ''}`}
                    onClick={() => handleColorClick('green')}
                >⬤ </span>
                <span 
                    className={`blue color-option ${color.blue ? 'selected' : ''}`}
                    onClick={() => handleColorClick('blue')}
                >⬤ </span>
                <span 
                    className={`purple color-option ${color.purple ? 'selected' : ''}`}
                    onClick={() => handleColorClick('purple')}
                >⬤ </span>
                <span 
                    className={`pink color-option ${color.pink ? 'selected' : ''}`}
                    onClick={() => handleColorClick('pink')}
                >⬤</span>
            </div>
        </div>
	)
}

export default ColorPicker;