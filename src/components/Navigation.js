import React from 'react';
import './Navigation.css';
import { NavIcons } from './icons';
import UtilitiesIcon from './UtilitiesIcon';
function Navigation() {
    return (
        <div className="navigation">
            <div className="navigation-container">
                {
                    NavIcons.map(icon => <UtilitiesIcon key={icon.name} name={icon.name} svg={icon.svg} />)
                }

            </div>
        </div>
    );
}

export default Navigation;