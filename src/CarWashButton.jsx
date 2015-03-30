var CarWashButton = React.createClass({

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
            <div className="carwashbutton" onClick={this.onClick}>{this.state.label}</div>
        );
    }  
});