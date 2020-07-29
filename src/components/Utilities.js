
import React from 'react';
import './Utilities.css';
import UtilitiesIcon from './UtilitiesIcon';

import { icons } from './icons';
function Utilities() {
    console.log(icons);
    return (
        <div className="utilities">
            <div class="head">
                <p>Recharge and pay bills</p>
            </div>
            <div className="utilities-container">
                {
                    icons.map(icon => <UtilitiesIcon key={icon.name} name={icon.name} svg={icon.svg} />)
                }

            </div>
        </div>
    );
}

export default Utilities;
