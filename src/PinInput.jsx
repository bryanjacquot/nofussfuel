var PinInput = React.createClass({
    
    getInitialState: function() {
        return {
            pin: []
        };
    },
    
    onEnterClicked: function() {
        if( this.state.pin.length < 4 ) {
            this.refs.myAlert.raise();
        }
        else {
            this.props.onChangeStep("grade");
        }
    },  
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },  
    
    onBackspaceClicked: function() {
        if( this.state.pin.length > 0 ) {
            var newPin = this.state.pin;
            newPin.pop();
            this.setState( {
                pin: newPin
            });
        }
    },

    onButtonClicked: function(value) {
        if( this.state.pin.length < 5 ) {
            var newPin = this.state.pin;
            newPin.push(value);
            this.setState( {
                pin: newPin
            });
        }
    },
    
    render: function() {
        return (
            <div className="pininput">
                <InputDisplay prompt="Please enter PIN" size="4" input={this.state.pin} />
                <Keypad onEnterClicked={this.onEnterClicked} 
                        onCancelClicked={this.onCancelClicked}
                        onBackspaceClicked={this.onBackspaceClicked}
                        onButtonClicked={this.onButtonClicked} />
                <Alert ref="myAlert" label="Please enter 4 digit pin" />
            </div>
        );
    }
});