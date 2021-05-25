import React from 'react';
import Token from './Token';

class ZeroToken extends React.Component {
    render() {
        return <Token 
            name="zero"
            value="0"
            drawEffect=""
        />
    }
}

export default ZeroToken;