import React from 'react';
import Investigator from '../Investigator';
import rolandBanks from './RolandBanksProfile-64.png';

class RolandBanks extends React.Component {

    render() {
        return (
            <Investigator name="Roland Banks" class="Guardian" picture={rolandBanks} maxDamage="9" maxSanity="9" agility="2" />
        );
    }
}

export default RolandBanks;