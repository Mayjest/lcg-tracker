import React from 'react';
import Investigator from './Investigator';
import investigatorData from './investigator-data.json';

class InvestigatorPicker extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            chosenInvestigator: null
        }
    }

    chooseInvestigator(event){
        console.log("in event" + event);
        this.setState(() => ({
            chosenInvestigator: event.target.value}));
    }

    render(){
        if (this.state.chosenInvestigator){
            var data = investigatorData.investigators.map((gator) => {
                if (gator.name === this.state.chosenInvestigator){
                    console.log('Match ' + gator.name);
                    return gator;
                }
                return null;
            })
            console.log (data);
            return <Investigator profile={data} />
        }
        else {
            var names = investigatorData.investigators.map((gator) => {
                return <option>{gator.name}</option>;
            });

            names.unshift(<option>Choose Investigator</option>);
            console.log(names);

            return (
                <select onChange={this.chosenInvestigator}>{names}</select>
            )
        }
    }

}

export default InvestigatorPicker;