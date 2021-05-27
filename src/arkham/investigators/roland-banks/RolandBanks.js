import React from 'react';
import Investigator from '../Investigator';
import rolandBanks from './RolandBanksProfile-64.png';

class RolandBanks extends React.Component {

    render() {
        return (
            <Investigator name="Roland Banks" class="Guardian" picture={rolandBanks} maxDamage="9" maxSanity="5" agility="2" willpower="3" intellect="3" combat="4" />
        );
    }
}

export default RolandBanks;