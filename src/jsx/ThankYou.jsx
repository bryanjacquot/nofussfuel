var ThankYou = React.createClass({   
    
    getInitialState: function() {
        var myReceipt = "";
        var myArrows = "";
        var myRule = <div className="thankyou--emptyrule" />;

        if( this.props.washType && this.props.washType != "" ) {
            myReceipt = "Please take your car wash receipt below";
            myArrows = <div className="arrows-down" />;
            myRule = <div className="thankyou--horizontalrule" />;
        }
        else if( this.props.receipt && this.props.receipt == "yes" ) {
            myReceipt = "Please take your receipt below";
            myArrows = <div className="arrows-down" />;
            myRule = <div className="thankyou--horizontalrule" />;
        }

        return {
            receipt: myReceipt,
            arrows: myArrows,
            rule: myRule
        };
    },

    componentDidMount: function() {
        setTimeout(this.onDone, 5000);
    },

    onDone: function() {
        this.props.onChangeStep("start");
    },
    
    render: function() {
        return (
            <div className="thankyou">
                <div className="row thankyou--banner">
                    Your transaction has completed
                </div>
                <div className="row thankyou--message">
                    Thanks for choosing Vail
                </div>
                <div className="row divider">
                    {this.state.rule}
                </div>
                <div className="row thankyou--receipt">
                    {this.state.receipt}
                </div>
                <div className="row thankyou--images">
                    {this.state.arrows}
                    <div className="row thankyou--logo">
                        vail
                    </div>
                </div>
            </div>
        );
    }  
});