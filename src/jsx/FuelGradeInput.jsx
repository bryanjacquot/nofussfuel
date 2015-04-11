var FuelGradeInput = React.createClass({

    getInitialState: function() {
        var self = this;
        var newLoyaltyMsgClasses = "fuelgradeinput--loyaltymessage";

        Object.keys(this.props.fuelGrades).map(function(fuelGrade) {
            if( self.props.discount > 0 ) {
                var newPrice = self.props.fuelGrades[fuelGrade].price - self.props.discount;
                self.props.fuelGrades[fuelGrade].price = newPrice.toFixed(2);
                if( fuelGrade == "0" ) {
                    self.props.fuelGrades[fuelGrade].selected = "true";
                    newLoyaltyMsgClasses = "fuelgradeinput--loyaltymessage fuelgradeinput--loyaltymessage-visible";
                }
            }
        });

        return {
            label: "Select Grade",
            nozzleClasses: "nozzle hidden",
            loyaltyMsgClasses: newLoyaltyMsgClasses
        };
    },

    componentWillUnmount: function() {
        var self = this;
        Object.keys(this.props.fuelGrades).map(function(fuelGrade) {
            self.props.fuelGrades[fuelGrade].selected = "false";
        });
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },

    onDoneClicked: function() {
        var gradeSelected = "false";
        var self = this;
        var price = "";
        var grade = ""

        Object.keys(this.props.fuelGrades).map(function(fuelGrade) {
            if( self.props.fuelGrades[fuelGrade].selected == "true" ) {
                gradeSelected = "true";
                price = self.props.fuelGrades[fuelGrade].price;
                grade = self.props.fuelGrades[fuelGrade].value;
            }
        });
        if( gradeSelected == "true" ) {
            this.props.onSelectGrade(grade, price);
            this.props.onChangeStep("nowfueling");
        }
        else {
            this.refs.myAlert.raise();
        }            
    },
    
    onGradeClicked: function(grade) {
        var self = this;

        Object.keys(this.props.fuelGrades).map(function(fuelGrade) {
            if( self.props.fuelGrades[fuelGrade].value == grade ) {
                self.props.fuelGrades[fuelGrade].selected = "true";
            }
            else {
                self.props.fuelGrades[fuelGrade].selected = "false";
            }
        });

        this.setState( {
            label: "Lift Nozzle to Begin",
            nozzleClasses: "nozzle"
        });
    },
    
    onCarWashSelected: function(wash, price) {
        this.props.onSelectWash(wash, price);
    },
    
    render: function() {
        var self = this;

        var bannerMessage = "";
        if( this.props.paymentMethod == "credit" ) {
            bannerMessage = "Your credit card has been accepted";
        }
        else if( this.props.paymentMethod == "debit" ) {
            bannerMessage = "Your debit card has been accepted";
        }
        else {
            bannerMessage = "You have prepaid $" + this.props.amount;
        }

        return (
            <div className="selectgrade">
                <div className="fuelgradeinput--header">
                    <div className="header col">
                        <img src="/img/check.png" className="checkmark"/>{bannerMessage}
                    </div>
                    <div className="fuelgradeinput--carwash">
                        <CarWash onCarWashSelected={this.onCarWashSelected}/>
                    </div>
                </div>
                <div className="row label center">
                    {this.state.label}
                </div>
                <div className="row">
                    {Object.keys(this.props.fuelGrades).map(function(grade) {
                        return (
                            <GradeButton value={self.props.fuelGrades[grade].value} 
                                         label={self.props.fuelGrades[grade].label}
                                         price={self.props.fuelGrades[grade].price}
                                         selected={self.props.fuelGrades[grade].selected} 
                                         onClick={self.onGradeClicked} 
                                         key={grade} />
                        )
                    })}
                </div>
                <div className={this.state.loyaltyMsgClasses}>
                    Your last loyalty purchase
                </div>
                <div className="row page--actions">
                    <div className="page--cancel" onClick={this.onCancelClicked}>
                        Cancel Transaction
                    </div>
                </div>
                <div className={this.state.nozzleClasses} onClick={this.onDoneClicked}>
                    Tap to simulate lifting the nozzle
                </div>
                <Alert ref="myAlert" label="Please select a fuel grade" />
            </div>
        );
    }
});