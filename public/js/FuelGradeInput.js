var fuelGrades = [
    { value: "87", label: "Regular", selected: "false" },
    { value: "89", label: "Plus", selected: "false" },
    { value: "91", label: "Supreme", selected: "false" }
];

var FuelGradeInput = React.createClass({displayName: "FuelGradeInput",
    
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
        this.forceUpdate();
    },
    
    render: function() {
        var self = this;
        return (
            React.createElement("div", {className: "selectgrade"}, 
                React.createElement("div", {className: "header"}, 
                    "Your card has been accepted"
                ), 
                React.createElement("div", {className: "row label center"}, 
                        "Select Grade"
                ), 
                React.createElement("div", {className: "row"}, 
                    Object.keys(fuelGrades).map(function(grade) {
                        return (
                            React.createElement(GradeButton, {value: fuelGrades[grade].value, 
                                         label: fuelGrades[grade].label, 
                                         selected: fuelGrades[grade].selected, 
                                         onClick: self.onGradeClicked})
                        )
                    })
                ), 
                React.createElement("div", {className: "row"}, 
                    React.createElement(Button, {value: "Cancel", onClick: this.onCancelClicked})
                )
            )
        );
    }
});