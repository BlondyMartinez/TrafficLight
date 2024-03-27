import React from "react";
import ColorPicker from "./color-picker";

const TrafficLightController = ({ selectedColors, onSelectColor }) => {
    return(
        <div className="controller ms-5">
            <ColorPicker initialSelected={selectedColors.top} identifier='top' onSelectColor={onSelectColor} />
            <ColorPicker initialSelected={selectedColors.mid} identifier='mid' onSelectColor={onSelectColor} />
            <ColorPicker initialSelected={selectedColors.bottom} identifier='bottom' onSelectColor={onSelectColor} />
        </div>
    );
}

export default TrafficLightController;