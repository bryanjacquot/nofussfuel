var CarWashSelector = React.createClass({displayName: "CarWashSelector",

    onClick: function() {
        this.props.onCarWashSelected(this.props.value);
    },

    render: function() {
        var self = this;
        return (
            React.createElement("div", {className: "carwashselector", onClick: this.onClick}, 
                React.createElement("div", {className: "washvalue center"}, this.props.value), 
                React.createElement("div", {className: "washlabel"}, 
                    React.createElement("ul", null, 
                        Object.keys(this.props.label).map(function(i) {
                            return (
                                React.createElement("li", {key: i}, 
                                    self.props.label[i]
                                )
                            )
                        })
                    )
                ), 
                React.createElement("div", {className: "washprice center"}, "$", this.props.price)
            )
        );
    }  
});