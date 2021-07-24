import React from 'react';
import "./Header.css";

class WorldSelectionHeader extends React.Component {
    constructor(){
        super()
    }


    render(){
        return (
            <div className="WorldSelectionHeader">
                <p id="WorldSelectionHeader_CurrentSelection">Worlds (24)</p>
                <p>Friends (0)</p>
                <p>Servers (24)</p>
                <div>
                    <span></span>
                </div>
            </div>
        )
    }
}

export default WorldSelectionHeader;