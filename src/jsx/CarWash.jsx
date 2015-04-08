var CarWash = React.createClass({

    getInitialState: function() {
        var newLabel = "Add Car Wash";
        var newClasses = "carwashbutton";

        if( this.props.washType && this.props.washType != "" ) {
            newLabel = this.props.washType + " Wash Selected";
            newClasses = "carwashbutton carwashbutton--selected";
        }

        return {
            label: newLabel,
            carwashdialog: "",
            classes: newClasses
        };
    },

    onCancelClicked: function() {
        this.setState( {
            label: "Add Car Wash",
            carwashdialog: "",
            classes: "carwashbutton"
        });  
        this.props.onCarWashSelected("", 0);
    },

    onClick: function() {
        this.setState( {
            classes: "carwashbutton carwashbutton--selected",
            carwashdialog: <CarWashInput onCancelClicked={this.onCancelClicked} onCarWashSelected={this.onCarWashSelected} />
        });
    },

    onCarWashSelected: function(wash, price) {
        var newLabel = wash + " Wash Selected";

        this.setState( {
            label: newLabel,
            carwashdialog: "",
            classes: "carwashbutton carwashbutton--selected",
        });

        this.props.onCarWashSelected(wash, price);
    },

    render: function() {
        return (
            <div>
                <div className={this.state.classes} onClick={this.onClick}>{this.state.label}</div>
                {this.state.carwashdialog}
            </div>
        );
    }  
});