var Alert = React.createClass({displayName: "Alert",    
    getInitialState: function() {
        return {
            alertClasses: "alert"
        };
    },
    
    removeAlert: function() {
        this.setState( {
            alertClasses: "alert"
        });
    },
    
    raise: function() {
        this.setState( {
            alertClasses: "alert alert--visible"
        });
        setTimeout(this.removeAlert, 3000);
    },
    
    render: function() {
        return (
            React.createElement("div", {className: this.state.alertClasses}, 
                this.props.label
            )
        );
    }  
});