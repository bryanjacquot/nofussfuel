var FuelGrades = [
    { value: "87", label: "Regular", price: "2.09", selected: "false" },
    { value: "89", label: "Plus", price: "2.15", selected: "false" },
    { value: "91", label: "Supreme", price: "2.25", selected: "false" }
];

var GasPump = React.createClass({
    
    getInitialState: function() {
        var startPage = "start";
        if( window.location.hash ) {
            startPage = window.location.hash.substring(1);
        }
        return {
            step: startPage,
            discountAmount: 0,
            fuelGrade: "",
            fuelPrice: 0,
            paymentMethod: "",
            prepayAmount: 0,
            washType: "",
            washPrice: 0,
            receipt: "no"
        };
    },

    resetPump: function() {
        this.setState( {
            discountAmount: 0,
            fuelGrade: "",
            fuelPrice: 0,
            paymentMethod: "",
            prepayAmount: 0,
            washType: "",
            washPrice: 0,
            receipt: "no"
        });
    },

    onSetDiscount: function(discount) {
        this.setState( {
            discountAmount: discount
        })
    },

    onRequestReceipt: function(requestReceipt) {
        this.setState( {
            receipt: requestReceipt
        })
    },

    onSelectGrade: function(grade, price) {
        this.setState( {
            fuelGrade: grade,
            fuelPrice: price
        })
    },

    onSelectWash: function(wash, price) {
        this.setState( {
            washType: wash,
            washPrice: price
        })
    },

    onSetPrepayAmount: function(amount) {
        this.setState( {
            prepayAmount: amount
        })
    },

    onSetPaymentMethod: function(method) {
        this.setState( {
            paymentMethod: method
        })
    },
    
    onChangeStep: function(newStep) {
        window.location.hash = '#' + newStep;
        if( newStep == "start" ) {
            this.resetPump();
        }

        this.setState( {
            step: newStep
        });
    },
    
    render: function() {
        var Step;
        
        if( this.state.step == "grade" ) {
            Step = <FuelGradeInput onChangeStep={this.onChangeStep}
                                   onSelectGrade={this.onSelectGrade}
                                   onSelectWash={this.onSelectWash}
                                   paymentMethod= {this.state.paymentMethod}
                                   discount={this.state.discountAmount}
                                   amount={this.state.prepayAmount} 
                                   fuelGrades={FuelGrades} />
        }
        else if ( this.state.step == "zip" ) {
            Step = <ZipCodeInput onChangeStep={this.onChangeStep} />                               
        }
        else if ( this.state.step == "nowfueling" ) {
            Step = <NowFueling onChangeStep={this.onChangeStep} 
                               onSelectWash={this.onSelectWash}
                               onRequestReceipt={this.onRequestReceipt}
                               paymentMethod={this.state.paymentMethod}
                               prepayAmount={this.state.prepayAmount}
                               washType={this.state.washType}
                               washPrice={this.state.washPrice}
                               price={this.state.fuelPrice} 
                               grade={this.state.fuelGrade} />  
        }
        else if ( this.state.step == "thankyou" ) {
            Step = <ThankYou onChangeStep={this.onChangeStep} 
                             washType={this.state.washType}
                             receipt={this.state.receipt}/>  
        }
        else if ( this.state.step == "pin" ) {
            Step = <PinInput onChangeStep={this.onChangeStep} />  
        }
        else if ( this.state.step == "prepay" ) {
            Step = <PrePay onChangeStep={this.onChangeStep}
                           onSetPrepayAmount={this.onSetPrepayAmount}
                           value={this.state.prepayAmount} />  
        }
        else {
            Step = <Start onChangeStep={this.onChangeStep} 
                          onSetPrepayAmount={this.onSetPrepayAmount}
                          onSetDiscount={this.onSetDiscount}
                          onSetPaymentMethod={this.onSetPaymentMethod} />
        }

        return Step;
    }  
});
        
React.render(
  <GasPump />,
  document.getElementById('container')
);