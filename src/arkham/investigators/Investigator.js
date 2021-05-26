import React from 'react';
import './Investigator.css';
import agility from './agility.png';
import willpower from './willpower.png';
import combat from './combat.png';
import intellect from './intellect.png';

class Investigator extends React.Component {

    constructor(props){
        super(props);
        let initDamage = 0;
        let initSanity = 0;
        if (props.physicalTrauma && props.physicalTrauma > 0){
            initDamage = props.physicalTrauma;
        }
        if (props.mentalTrauma && props.mentalTrauma > 0) {
            initSanity = props.mentalTrauma;
        }
        this.state = {
            currentDamage: initDamage,
            currentSanity: initSanity
        }

        this.reduceDamage = this.reduceDamage.bind(this);
        this.increaseDamage = this.increaseDamage.bind(this);
        this.reduceSanity = this.reduceSanity.bind(this);
        this.increaseSanity = this.increaseSanity.bind(this);
    }

    reduceDamage() {
        if (this.state.currentDamage > 0){
            this.setState(state => ({
                currentDamage: this.state.currentDamage - 1
            }));
        }
    }

    increaseDamage() {
        if (this.state.currentDamage < this.props.maxDamage) {
            this.setState(state => ({
                currentDamage: this.state.currentDamage + 1
            }));
        }
    }

    reduceSanity() {
        if (this.state.currentSanity > 0){
            this.setState(state => ({
                currentSanity: this.state.currentSanity - 1
            }));
        }
    }

    increaseSanity() {
        if (this.state.currentSanity < this.props.maxSanity) {
            this.setState(state => ({
                currentSanity: this.state.currentSanity + 1
            }));
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
                            <span>{this.props.intellect}</span>
                            <img src={intellect} alt="Intellect" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.willpower}</span>
                            <img src={willpower} alt="Willpower" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.combat}</span>
                            <img src={combat} alt="Combat" width="28px" height="28px"></img>
                        </div>
                        <div className="investigator-skill">
                            <span>{this.props.agility}</span>
                            <img src={agility} alt="Agility" width="28px" height="28px"></img>
                        </div>
                    </div>
                    <div className="investigator-picture">
                        <img src={this.props.picture} alt={this.props.name}/>
                    </div>
                    <div className="investigator-stats">
                        <div>
                            <button onClick={this.reduceDamage}>-</button>
                            Damage: {this.state.currentDamage}/{this.props.maxDamage}
                            <button onClick={this.increaseDamage}>+</button>
                        </div>
                        <div>
                            <button onClick={this.reduceSanity}>-</button>
                            Sanity: {this.state.currentSanity}/{this.props.maxSanity}                        
                            <button onClick={this.increaseSanity}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Investigator;