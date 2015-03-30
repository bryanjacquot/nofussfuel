var PinInput = React.createClass({displayName: "PinInput",
    
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
            React.createElement("div", {className: "pininput"}, 
                React.createElement(InputDisplay, {password: "true", prompt: "Please enter debit card PIN", size: "4", input: this.state.pin}), 
                React.createElement(Keypad, {onEnterClicked: this.onEnterClicked, 
                        onCancelClicked: this.onCancelClicked, 
                        onBackspaceClicked: this.onBackspaceClicked, 
                        onButtonClicked: this.onButtonClicked}), 
                React.createElement(Alert, {ref: "myAlert", label: "Please enter 4 digit pin"})
            )
        );
    }
});