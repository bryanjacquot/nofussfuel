var fuelGrades = [
    { value: "87", label: "Regular", price: "$2.09", selected: "false" },
    { value: "89", label: "Plus", price: "$2.15", selected: "false" },
    { value: "91", label: "Supreme", price: "$2.25", selected: "false" }
];

var FuelGradeInput = React.createClass({displayName: "FuelGradeInput",

    getInitialState: function() {
        return {
            label: "Select Grade"
        };
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },

    onDoneClicked: function() {
        var gradeSelected = "false";

        Object.keys(fuelGrades).map(function(fuelGrade) {
            if( fuelGrades[fuelGrade].selected == "true" ) {
                gradeSelected = "true";
            }
        });
        if( gradeSelected == "true" ) {
            this.props.onChangeStep("nowfueling");
        }
        else {
            this.refs.myAlert.raise();
        }            
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
            React.createElement("div", {className: "selectgrade"}, 
                React.createElement("div", {className: "fuelgradeinput--header"}, 
                    React.createElement("div", {className: "header col"}, 
                        bannerMessage
                    ), 
                    React.createElement("div", {className: "fuelgradeinput--carwash"}, 
                        React.createElement(CarWashButton, null)
                    )
                ), 
                React.createElement("div", {className: "row label center"}, 
                    this.state.label
                ), 
                React.createElement("div", {className: "row"}, 
                    Object.keys(fuelGrades).map(function(grade) {
                        return (
                            React.createElement(GradeButton, {value: fuelGrades[grade].value, 
                                         label: fuelGrades[grade].label, 
                                         price: fuelGrades[grade].price, 
                                         selected: fuelGrades[grade].selected, 
                                         onClick: self.onGradeClicked})
                        )
                    })
                ), 
                React.createElement("div", {className: "row page--actions"}, 
                    React.createElement("div", {className: "page--cancel", onClick: this.onCancelClicked}, 
                        "Cancel Transaction"
                    ), 
                    React.createElement("div", {className: "page--done", onClick: this.onDoneClicked}, 
                        "Lift Nozzel"
                    )
                ), 
                React.createElement(Alert, {ref: "myAlert", label: "Please select a fuel grade"})
            )
        );
    }
});