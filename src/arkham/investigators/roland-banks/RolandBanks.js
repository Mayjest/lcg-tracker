import React from 'react';
import Investigator from '../Investigator';
import rolandBanks from './RolandBanksProfile-64.png';

class RolandBanks extends React.Component {

    investigatorData = {
        name: "Roland Banks",
        class: "Guardian",
        picture: rolandBanks,
        maxDamage: 9,
        maxSanity: 5,
        stats: {
            agility: 2,
            willpower: 3,
            intellect: 3,
            combat: 4 
        }
    };

    render() {
        return (
            <Investigator 
                profile={this.investigatorData} status={{physicalTrauma: 3, mentalTrauma: 0}}/>
        );
    }
}

export default RolandBanks;