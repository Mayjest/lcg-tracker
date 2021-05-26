import React from 'react';

class ChaosBag extends React.Component {
    intialTokens;
    availableTokens;

    constructor(props){
        super(props)
        this.initialTokens = props.tokens;
        this.availableTokens = props.tokens;
    }

    render() {
        return (
            <div className="chaos-bag">
                {this.availableTokens}
            </div>
        );
    }
}

export default ChaosBag;