import React from 'react';
import Investigator from '../Investigator';
import rolandBanks from './RolandBanksProfile-64.png';
import rolandData from './roland-data.json';

class RolandBanks extends React.Component {

    

    render() {
        this.investigatorData = rolandData;
        return (
            <Investigator 
                profile={this.investigatorData} status={{physicalTrauma: 3, mentalTrauma: 0}}/>
        );
    }
}

export default RolandBanks;