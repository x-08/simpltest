import React from 'react';
import './Merchants.css';
import { merchantIcons } from './icons';
import UtilitiesIcon from './UtilitiesIcon';
function Merchants() {
    return (
        <div className="merchants">
            <div class="head">
                <p>You can also use Simpl on</p>
            </div>
            <div className="merchants-container">
                {
                    merchantIcons.map(icon => <UtilitiesIcon key={icon.name} name={icon.name} svg={icon.svg} />)
                }

            </div>
        </div>
    );
}

export default Merchants;
