var NowFueling = React.createClass({displayName: "NowFueling",   
    
    getInitialState: function() {
        return {
            total: 0,
            gallons: 0,
            printlabel: "Tap To Print Reciept"
        }
    },

    pumpFuel: function() {
        var newGallons = parseFloat(this.state.gallons) + .1;
        newGallons = newGallons.toFixed(3);

        var newTotal = parseFloat(this.state.gallons) * this.props.price;
        newTotal = newTotal.toFixed(2);

        if( this.props.paymentMethod == "prepay" && newTotal > this.props.prepayAmount ) {
            newTotal = this.props.prepayAmount;
            newTotal = newTotal.toFixed(2);
            newGallons = this.props.prepayAmount / this.props.price;
            newGallons = newGallons.toFixed(3);
            clearInterval(this.interval);
        }

        this.setState( {
            gallons: newGallons,
            total: newTotal
        });
    },

    componentDidMount: function() {
        this.interval = setInterval(this.pumpFuel, 100);
    },

    componentWillUnmount: function() {
        clearInterval(this.interval);
    },

    onDone: function() {
        clearInterval(this.interval);
        this.props.onChangeStep("thankyou");
    },

    onPrintReceipt: function() {
        this.props.onRequestReciept("yes");
        this.setState( {
            printlabel: "Reciept Will Be Printed"
        });
    },
    
    render: function() {        
        return (
            React.createElement("div", {className: "nowfueling"}, 
                React.createElement("div", {className: "fuelgradeinput--header"}, 
                    React.createElement("div", {className: "header col"}, 
                        "You selected grade ", this.props.grade, " - $", this.props.price
                    ), 
                    React.createElement("div", {className: "fuelgradeinput--carwash"}, 
                        React.createElement(CarWashButton, null)
                    )
                ), 
                React.createElement("div", {className: "row nowfueling--body"}, 
                    React.createElement("div", {className: "col nowfueling--left"}, 
                        React.createElement("div", {className: "row nowfueling--label"}, 
                            "Fueling in progress"
                        ), 
                        React.createElement("div", {className: "row nowfueling--visual"}, 
                            React.createElement("div", {className: "pump-image"}), 
                            React.createElement("div", {className: "arrows-right"}), 
                            React.createElement("div", {className: "car-image"})
                        ), 
                        React.createElement("div", {className: "row nowfueling--amount"}, 
                            this.state.gallons
                        ), 
                        React.createElement("div", {className: "row nowfueling--amount-unit"}, 
                            "Gallons"
                        ), 
                        React.createElement("div", {className: "row divider"}, 
                            React.createElement("div", {className: "horizontal-rule"})
                        ), 
                        React.createElement("div", {className: "row nowfueling--total"}, 
                            "$ ", this.state.total
                        ), 
                        React.createElement("div", {className: "row nowfueling--actions"}, 
                            React.createElement("div", {className: "nowfueling--print-receipt", onClick: this.onPrintReceipt}, 
                                this.state.printlabel
                            )
                        )
                    ), 
                    React.createElement("div", {className: "col nowfueling--right deals-image"})
                ), 
                React.createElement("div", {className: "nozzle", onClick: this.onDone}, 
                    "Tap to simulate replacing the nozzle"
                )
            )
        );
    }  
});