import React from "react";
import ColorPicker from "./color-picker";
import LightCycle from "./light-cycle";

const TrafficLightController = (props) => {
    return(
        <div className="d-flex flex-column position-absolute bottom-0 start-60">
            <div className="controller">
                <LightCycle onSelectPosition={props.onSelectPosition} />
                <ColorPicker initialSelected={props.selectedColors.top} identifier='top' onSelectColor={props.onSelectColor} />
                <ColorPicker initialSelected={props.selectedColors.mid} identifier='mid' onSelectColor={props.onSelectColor} />
                <ColorPicker initialSelected={props.selectedColors.bottom} identifier='bottom' onSelectColor={props.onSelectColor} />
            </div>
            <div className="d-flex justify-content-around">
                <div className="controller-bar"></div>
                <div className="controller-bar"></div>
            </div>
        </div>
    );
}

export default TrafficLightController;