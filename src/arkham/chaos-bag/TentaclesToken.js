import React from 'react';
import Token from './Token';

class TentaclesToken extends React.Component {
    render() {
        return <Token 
            name="tentacles"
            value="-999"
            drawEffect="Automatically fail this test"
        />
    }
}

export default TentaclesToken;