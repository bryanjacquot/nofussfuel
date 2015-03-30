var CarWashSelector = React.createClass({displayName: "CarWashSelector",

    onClick: function() {
        this.props.onClick(this.props.value);
    },

    render: function() {
        return (
            React.createElement("div", {className: "carwashselector", onClick: this.onClick}, 
                React.createElement("div", {className: "washlabel center"}, this.props.label), 
                React.createElement("div", {className: "washvalue center"}, this.props.value), 
                React.createElement("div", {className: "washprice center"}, this.props.price)
            )
        );
    }  
});