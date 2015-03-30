var CarWashButton = React.createClass({displayName: "CarWashButton",

    getInitialState: function() {
        return {
            label: "Add Car Wash"
        };
    },
    
    onClick: function() {
        alert("adding car wash");
    },

    onCarWashSelected: function(carwash) {
        this.setState( {
            label: carwash
        });
    },

    render: function() {
        return (
            React.createElement("div", {className: "carwashbutton", onClick: this.onClick}, this.state.label)
        );
    }  
});