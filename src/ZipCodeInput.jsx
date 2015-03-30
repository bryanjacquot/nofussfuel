var ZipCodeInput = React.createClass({
    
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
            <div className="zipcodeinput">
                <InputDisplay password="false" prompt="Enter your billing zip code" size="5" input={this.state.zipCode} />
                <Keypad onEnterClicked={this.onEnterClicked} 
                        onCancelClicked={this.onCancelClicked}
                        onBackspaceClicked={this.onBackspaceClicked}
                        onButtonClicked={this.onButtonClicked} />
                <Alert ref="myAlert" label="Please enter 5 digit billing zip code" />
            </div>
        );
    }
});