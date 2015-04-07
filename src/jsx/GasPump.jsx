var GasPump = React.createClass({
    
    getInitialState: function() {
        var startPage = "start";
        if( window.location.hash ) {
            startPage = window.location.hash.substring(1);
        }
        return {
            step: startPage
        };
    },
    
    onChangeStep: function(newStep, newData, newPayment) {
        window.location.hash = '#' + newStep;
        this.setState( {
            step: newStep,
            data: newData,
            payment: newPayment
        });
    },
    
    render: function() {
        var Step;
        
        if( this.state.step == "grade" ) {
            Step = <FuelGradeInput onChangeStep={this.onChangeStep} 
                                   payment={this.state.payment}
                                   amount={this.state.data} />
        }
        else if ( this.state.step == "zip" ) {
            Step = <ZipCodeInput onChangeStep={this.onChangeStep} />                               
        }
        else if ( this.state.step == "nowfueling" ) {
            Step = <NowFueling onChangeStep={this.onChangeStep} />  
        }
        else if ( this.state.step == "pin" ) {
            Step = <PinInput onChangeStep={this.onChangeStep} />  
        }
        else if ( this.state.step == "prepay" ) {
            Step = <PrePay onChangeStep={this.onChangeStep} value={this.state.data} />  
        }
        else {
            Step = <Start onChangeStep={this.onChangeStep}/>
        }

        return Step;
    }  
});
        
React.render(
  <GasPump />,
  document.getElementById('container')
);