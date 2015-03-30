var fuelGrades = [
    { value: "87", label: "Regular", selected: "false" },
    { value: "89", label: "Plus", selected: "false" },
    { value: "91", label: "Supreme", selected: "false" }
];

var FuelGradeInput = React.createClass({
    
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
            <div className="selectgrade">
                <div className="header">
                    Your card has been accepted
                </div>
                <div className="row label center">
                        Select Grade
                </div>
                <div className="row">
                    {Object.keys(fuelGrades).map(function(grade) {
                        return (
                            <GradeButton value={fuelGrades[grade].value} 
                                         label={fuelGrades[grade].label}
                                         selected={fuelGrades[grade].selected} 
                                         onClick={self.onGradeClicked} />
                        )
                    })}
                </div>
                <div className="row">
                    <Button value="Cancel" onClick={this.onCancelClicked} />
                </div>
            </div>
        );
    }
});