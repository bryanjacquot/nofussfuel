var fuelGrades = [
    { value: "87", label: "Regular", price: "$2.09", selected: "false" },
    { value: "89", label: "Plus", price: "$2.15", selected: "false" },
    { value: "91", label: "Supreme", price: "$2.25", selected: "false" }
];

var FuelGradeInput = React.createClass({

    getInitialState: function() {
        return {
            label: "Select Grade"
        };
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },
    
    onGradeClicked: function(grade) {
        Object.keys(fuelGrades).map(function(fuelGrade) {
            if( fuelGrades[fuelGrade].value == grade ) {
                fuelGrades[fuelGrade].selected = "true";
            }
            else {
                fuelGrades[fuelGrade].selected = "false";
            }
        });

        this.setState( {
            label: "Lift Nozzel to Begin"
        });
    },
    
    render: function() {
        var self = this;

        var bannerMessage = "";
        if( this.props.payment == "credit" ) {
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
                    {Object.keys(fuelGrades).map(function(grade) {
                        return (
                            <GradeButton value={fuelGrades[grade].value} 
                                         label={fuelGrades[grade].label}
                                         price={fuelGrades[grade].price}
                                         selected={fuelGrades[grade].selected} 
                                         onClick={self.onGradeClicked} />
                        )
                    })}
                </div>
                <div className="row">
                    <div className="fuelgradeinput--cancel" onClick={this.onCancelClicked}>
                        Cancel Transaction
                    </div>
                </div>
            </div>
        );
    }
});