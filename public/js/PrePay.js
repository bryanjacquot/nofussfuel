var PrePay = React.createClass({displayName: "PrePay",

    onCashInserted: function(amount) {
        var newAmount = parseInt(this.state.amount) + parseInt(amount);
        this.setState( {
            amount: newAmount
        });
    },

    getInitialState: function() {
        return {
            amount: this.props.value
        };
    },
    
    onDoneClicked: function() {
        this.props.onChangeStep("grade");
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },

    onPrePayClicked: function(value) {
        this.onCashInserted(value);
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "prepay"}, 
                React.createElement("div", {className: "row prepay--banner"}, 
                    "Prepaid Amount"
                ), 
                React.createElement("div", {className: "row prepay--amount"}, 
                    React.createElement("div", {className: "prepay--unit"}, "$"), 
                    React.createElement("div", {className: "prepay--value"}, this.state.amount)
                ), 
                React.createElement("div", {className: "row prepay--actions"}, 
                    React.createElement("div", {className: "prepay--cancel", onClick: this.onCancelClicked}, 
                        "Cancel Transaction"
                    ), 
                    React.createElement("div", {className: "prepay--done", onClick: this.onDoneClicked}, 
                        "Done with Prepaid"
                    ), 
                    React.createElement("div", {className: "prepay--arrows arrows-down"})
                ), 
                React.createElement("div", {className: "row prepay--input"}, 
                    React.createElement(CashInput, {onClick: this.onPrePayClicked})
                )
            )
        );
    }
});