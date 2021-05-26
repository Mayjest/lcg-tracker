import React from 'react';
import './Token.css';

class Token extends React.Component {
    
    render() {
        return (
            <div className="chaos-token">
                name={this.props.name}
                <br/>
                value={this.props.value}
                <br/>
                {this.props.drawEffect &&
                    <div>  
                        value={this.props.drawEffect}
                    </div>
                }
            </div>
        );
    }
}

export default Token;