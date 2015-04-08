var NowFueling = React.createClass({   
    
    getInitialState: function() {
        return {
            total: 0,
            gallons: 0,
            printlabel: "Tap To Print receipt"
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
        this.props.onRequestReceipt("yes");
        this.setState( {
            printlabel: "receipt Will Be Printed"
        });
    },
    
    render: function() {        
        return (
            <div className="nowfueling">
                <div className="fuelgradeinput--header">
                    <div className="header col">
                        You selected grade {this.props.grade} - ${this.props.price}
                    </div>
                    <div className="fuelgradeinput--carwash">
                        <CarWash onCarWashSelected={this.onCarWashSelected}
                                 washType={this.props.washType}
                                 washPrice={this.props.washPrice} />
                    </div>
                </div>
                <div className="row nowfueling--body">
                    <div className="col nowfueling--left">
                        <div className="row nowfueling--label">
                            Fueling in progress
                        </div>
                        <div className="row nowfueling--visual">
                            <div className="pump-image" />
                            <div className="arrows-right" />
                            <div className="car-image" />
                        </div>
                        <div className="row nowfueling--amount">
                            {this.state.gallons}
                        </div>
                        <div className="row nowfueling--amount-unit">
                            Gallons
                        </div>
                        <div className="row divider">
                            <div className="horizontal-rule" />
                        </div>
                        <div className="row nowfueling--total">
                            $ {this.state.total}
                        </div>
                        <div className="row nowfueling--actions">
                            <div className="nowfueling--print-receipt" onClick={this.onPrintReceipt}>
                                {this.state.printlabel}
                            </div>
                        </div>
                    </div>
                    <div className="col nowfueling--right deals-image" />
                </div>
                <div className="nozzle" onClick={this.onDone}>
                    Tap to simulate replacing the nozzle
                </div>
            </div>
        );
    }  
});