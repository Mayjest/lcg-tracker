import React from 'react';
import './Investigator.css';
import agility from './agility.png';
import willpower from './willpower.png';
import combat from './combat.png';
import intellect from './intellect.png';
import StatTracker from './StatTracker';

class Investigator extends React.Component {

    // profile = {
    //     name: "Roland Banks",
    //     class: "Guardian",
    //     picture: rolandBanks,
    //     maxDamage: 9,
    //     maxSanity: 5,
    //     stats: {
    //         agility: 2,
    //         willpower: 3,
    //         intellect: 3,
    //         combat: 4
    //     }
    // };

    // status = {
    //     physicalTrauma: 0,
    //     mentalTrauma: 0
    // }


    constructor(props){
        super(props);
        this.initDamage = 0;
        this.initSanity = 0;
        if (props.status) {
            if (props.status.physicalTrauma && props.status.physicalTrauma > 0){
                this.initDamage = props.status.physicalTrauma;
            }
            if (props.status.mentalTrauma && props.status.mentalTrauma > 0) {
                this.initSanity = props.status.mentalTrauma;
           }
        }
        this.state = {
            currentDamage: this.initDamage,
            currentSanity: this.initSanity
        }

        this.reduceDamage = this.reduceDamage.bind(this);
        this.increaseDamage = this.increaseDamage.bind(this);
        this.reduceSanity = this.reduceSanity.bind(this);
        this.increaseSanity = this.increaseSanity.bind(this);
    }

    reduceDamage() {
        if (this.state.currentDamage > this.initDamage){
            this.setState(() => ({
                currentDamage: this.state.currentDamage - 1
            }));
        }
    }

    increaseDamage() {
        if (this.state.currentDamage < this.props.profile.maxDamage) {
            this.setState(() => ({
                currentDamage: this.state.currentDamage + 1
            }));
        }
    }

    reduceSanity() {
        if (this.state.currentSanity > this.initSanity){
            this.setState(() => ({
                currentSanity: this.state.currentSanity - 1
            }));
        }
    }

    increaseSanity() {
        if (this.state.currentSanity < this.props.profile.maxSanity) {
            this.setState(() => ({
                currentSanity: this.state.currentSanity + 1
            }));
        }
    }

    render() {
        return (
            <div className="investigator">
                <div className="investigator-wrapper">
                    <div className="investigator-profile">
                        <span className="investigator-name">{this.props.profile.name}</span>
                        <span className="investigator-class">{this.props.profile.class}</span>
                        <div className="investigator-skill">
                            <span>{this.props.profile.stats.willpower}</span>
                            <img src={willpower} alt="Willpower" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.profile.stats.intellect}</span>
                            <img src={intellect} alt="Intellect" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.profile.stats.combat}</span>
                            <img src={combat} alt="Combat" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.profile.stats.agility}</span>
                            <img src={agility} alt="Agility" width="28px" height="28px"></img>
                        </div>
                    </div>
                    <div className="investigator-picture">
                        <img src={this.props.profile.picture} alt={this.props.profile.name}/>
                    </div>
                    <div className="investigator-stats">
                        <StatTracker stat="Damage" color="Red" current={this.state.currentDamage} max={this.props.profile.maxDamage} reduce={this.reduceDamage} increase={this.increaseDamage}/>
                        <StatTracker stat="Sanity" color="Blue" current={this.state.currentSanity} max={this.props.profile.maxSanity} reduce={this.reduceSanity} increase={this.increaseSanity}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investigator;