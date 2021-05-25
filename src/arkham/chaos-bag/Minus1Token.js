import React from 'react';
import Token from './Token';

class Minus1Token extends React.Component {
    render() {
        return <Token 
            name="minus-one"
            value="-1"
            drawEffect=""
        />
    }
}

export default Minus1Token;