import React from 'react';
import './Token.css';

class Token extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="chaos-token">
                name={this.props.name}
                <br/>
                value={this.props.value}
                <br/>
                value={this.props.drawEffect}
            </div>
        );
    }
}

export default Token;