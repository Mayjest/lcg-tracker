import React from 'react';
import Token from './Token';

class TabletToken extends React.Component {
    scenarioValue;
    scenarioDrawEffect;

    constructor(props){
        super(props)
        this.scenarioValue = props.scenarioValue;
        this.scenarioDrawEffect = props.scenarioDrawEffect;

    }
    render() {
        return <Token 
            name="tablet-token"
            value={this.props.scenarioValue}
            drawEffect={this.scenarioDrawEffect}
        />
    }
}

export default TabletToken;