var FuelGradeInput = React.createClass({

    getInitialState: function() {
        var self = this;
        Object.keys(this.props.fuelGrades).map(function(fuelGrade) {
            if( self.props.discount > 0 ) {
                var newPrice = self.props.fuelGrades[fuelGrade].price - self.props.discount;
                self.props.fuelGrades[fuelGrade].price = newPrice.toFixed(2);
            }
        });

        return {
            label: "Select Grade"
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
            label: "Lift Nozzle to Begin"
        });
    },
    
    render: function() {
        var self = this;

        var bannerMessage = "";
        if( this.props.paymentMethod == "credit" ) {
            bannerMessage = "Your credit card has been accepted";
        }
        else if( this.props.payment == "debit" ) {
            bannerMessage = "Your debit card has been accepted";
        }
        else {
            bannerMessage = "You have prepaid $" + this.props.amount;
        }

        return (
            <div className="selectgrade">
                <div className="fuelgradeinput--header">
                    <div className="header col">
                        {bannerMessage}
                    </div>
                    <div className="fuelgradeinput--carwash">
                        <CarWashButton />
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
                <div className="row page--actions">
                    <div className="page--cancel" onClick={this.onCancelClicked}>
                        Cancel Transaction
                    </div>
                    <div className="page--done" onClick={this.onDoneClicked}>
                        Lift Nozzle
                    </div>
                </div>
                <Alert ref="myAlert" label="Please select a fuel grade" />
            </div>
        );
    }
});