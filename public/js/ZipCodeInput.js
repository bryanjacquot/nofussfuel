var ZipCodeInput = React.createClass({displayName: "ZipCodeInput",
    
    getInitialState: function() {
        return {
            zipCode: []
        };
    },
    
    onEnterClicked: function() {
        if( this.state.zipCode.length < 5 ) {
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
        if( this.state.zipCode.length > 0 ) {
            var newZip = this.state.zipCode;
            newZip.pop();
            this.setState( {
                zipCode: newZip
            });
        }
    },

    onButtonClicked: function(value) {
        if( this.state.zipCode.length < 5 ) {
            var newZip = this.state.zipCode;
            newZip.push(value);
            this.setState( {
                zipCode: newZip
            });
        }
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "zipcodeinput"}, 
                React.createElement(InputDisplay, {password: "false", prompt: "Enter your billing zip code", size: "5", input: this.state.zipCode}), 
                React.createElement(Keypad, {onEnterClicked: this.onEnterClicked, 
                        onCancelClicked: this.onCancelClicked, 
                        onBackspaceClicked: this.onBackspaceClicked, 
                        onButtonClicked: this.onButtonClicked}), 
                React.createElement(Alert, {ref: "myAlert", label: "Please enter 5 digit billing zip code"})
            )
        );
    }
});