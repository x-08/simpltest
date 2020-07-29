import React from 'react';
import './UtilitiesIcon.css';
function UtilitiesIcon(props) {
    return (
        <div className="square">
            <div>
                {props.svg}
            </div>
            <div className ="text">
                {props.name}
            </div>

        </div>
    );
}

export default UtilitiesIcon;