var GasPump = React.createClass({displayName: "GasPump",
    
    getInitialState: function() {
        var startPage = "start";
        if( window.location.hash ) {
            startPage = window.location.hash.substring(1);
        }
        return {
            step: startPage
        };
    },
    
    onChangeStep: function(newStep) {
        window.location.hash = '#' + newStep;
        this.setState( {
            step: newStep
        });
    },
    
    render: function() {
        var Step;
        
        if( this.state.step == "grade" ) {
            Step = React.createElement(FuelGradeInput, {onChangeStep: this.onChangeStep})
        }
        else if ( this.state.step == "zip" ) {
            Step = React.createElement(ZipCodeInput, {onChangeStep: this.onChangeStep})                               
        }
        else if ( this.state.step == "nowfueling" ) {
            Step = React.createElement(NowFueling, {onChangeStep: this.onChangeStep})  
        }
        else if ( this.state.step == "pin" ) {
            Step = React.createElement(PinInput, {onChangeStep: this.onChangeStep})  
        }
        else if ( this.state.step == "prepay" ) {
            Step = React.createElement(PrePay, {onChangeStep: this.onChangeStep})  
        }
        else {
            Step = React.createElement(Start, {onChangeStep: this.onChangeStep})
        }
        
        return Step;
    }  
});
        
React.render(
  React.createElement(GasPump, null),
  document.getElementById('container')
);