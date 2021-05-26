import React from 'react';
import './Investigator.css';
import agility from './agility.png';

class Investigator extends React.Component {

    currentDamage = 0;
    currentSanity = 0;

    constructor(props){
        super(props);
        if (props.physicalTrauma && props.physicalTrauma > 0){
            this.currentDamage = props.physicalTrauma;
        }
        if (props.mentalTrauma && props.mentalTrauma > 0) {
            this.currentSanity = props.mentalTrauma;
        }
    }

    render() {
        return (
            <div className="investigator">
                <div className="investigator-wrapper">
                    <div className="investigator-profile">
                        <span className="investigator-name">{this.props.name}</span>
                        <span className="investigator-class">{this.props.class}</span>
                        <div className="investigator-skill">
                            <span>{this.props.agility}</span>
                            <img src={agility} alt="Agility" width="28px" height="28px"></img>
                        </div>
                    </div>
                    <div className="investigator-picture">
                        <img src={this.props.picture} alt={this.props.name}/>
                    </div>
                    <div className="investigator-stats">
                        <div>Damage: {this.currentDamage}/{this.props.maxDamage}</div>
                        <div>Sanity: {this.currentSanity}/{this.props.maxSanity}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investigator;