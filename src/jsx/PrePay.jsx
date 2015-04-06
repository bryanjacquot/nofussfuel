var PrePay = React.createClass({

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
        this.props.onChangeStep("grade", this.state.amount, "prepay");
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
    },

    onPrePayClicked: function(value) {
        this.onCashInserted(value);
    },
    
    render: function() {
        return (
            <div className="prepay">
                <div className="row prepay--banner">
                    Prepaid Amount
                </div>
                <div className="row prepay--amount">
                    <div className="prepay--unit">$</div>
                    <div className="prepay--value">{this.state.amount}</div>
                </div>
                <div className="row page--actions">
                    <div className="page--cancel" onClick={this.onCancelClicked}>
                        Cancel Transaction
                    </div>
                    <div className="page--done" onClick={this.onDoneClicked}>
                        Done with Prepaid
                    </div>
                    <div className="prepay--arrows arrows-down" />
                </div>
                <div className="row prepay--input">
                    <CashInput onClick={this.onPrePayClicked} />
                </div>
            </div>
        );
    }
});