import React from 'react';
import './StatTracker.css'

class StatTracker extends React.Component{


    render() {
        const styles = {
            'background-color': this.props.color,
            'border-color': this.props.color
        }
        return (
            <div className="stat-tracker">
                <button onClick={this.props.reduce} style={styles}>-</button>
                <span>{this.props.stat}: {this.props.current}/{this.props.max}</span>
                <button onClick={this.props.increase} style={styles}>+</button>
            </div>
        );
    }   
}

export default StatTracker;