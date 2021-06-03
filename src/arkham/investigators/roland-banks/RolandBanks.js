import React from 'react';
import Investigator from '../Investigator';
import rolandData from './roland-data.json';
class RolandBanks extends React.Component {

    render() {
        return (
            <Investigator 
                profile={rolandData} status={{physicalTrauma: 3, mentalTrauma: 0}}/>
        );
    }
}

export default RolandBanks;