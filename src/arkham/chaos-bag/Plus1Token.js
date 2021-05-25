import React from 'react';
import Token from './Token';

class Plus1Token extends React.Component {
    render() {
        return <Token 
            name="plus-one"
            value="1"
            drawEffect=""
        />
    }
}

export default Plus1Token;