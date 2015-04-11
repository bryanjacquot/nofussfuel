var cashDenominations = [1, 5, 10, 20, 50];

var CashInput = React.createClass({displayName: "CashInput",  

    onClick: function(value) {
        this.props.onClick(value);
    },

    render: function() {
    	var self = this;
        return (
            React.createElement("div", {className: "cash-input--buttons"}, 
                Object.keys(cashDenominations).map(function(item) {
                    return (
                        React.createElement(PrePayButton, {key: item, value: cashDenominations[item], onClick: self.onClick, unit: "$"})
                    )
                })
            )
        );
    }  
});