import React from "react";
import ColorPicker from "./color-picker";

const TrafficLightController = ({ selectedColors, onSelectColor }) => {
    return(
        <div className="d-flex flex-column position-absolute bottom-0 start-60">
            <div className="controller">
                <ColorPicker initialSelected={selectedColors.top} identifier='top' onSelectColor={onSelectColor} />
                <ColorPicker initialSelected={selectedColors.mid} identifier='mid' onSelectColor={onSelectColor} />
                <ColorPicker initialSelected={selectedColors.bottom} identifier='bottom' onSelectColor={onSelectColor} />
            </div>
            <div className="d-flex justify-content-around">
                <div className="controller-bar"></div>
                <div className="controller-bar"></div>
            </div>
        </div>
    );
}

export default TrafficLightController;