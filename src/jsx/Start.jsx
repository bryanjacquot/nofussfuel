var Start = React.createClass({
    
    getInitialState: function() {
        return {
            bannerClasses: "banner"
        };
    },
    
    removeAlert: function() {
        this.setState( {
            bannerClasses: "banner"
        });
    },
    
    onPayInsideClicked: function() {
        this.refs.myAlert.raise();
    },
    
    onPrePayClicked: function(value) {
        this.props.onSetPaymentMethod("prepay");
        this.props.onSetPrepayAmount(value);
        this.props.onChangeStep("prepay");
    },
    
    onCreditClicked: function() {
        this.props.onSetPaymentMethod("credit");
        this.props.onChangeStep("zip");
    },
    
    onDebitClicked: function() {
        this.props.onSetPaymentMethod("debit");
        this.props.onChangeStep("pin");
    },
    
    onLoyaltyClicked: function() {
        this.refs.myBanner.raise();
        this.props.onSetDiscount(0.30);
        this.props.onChangeStep("loyalty");
    },
    
    onGiftcardClicked: function() {
        this.props.onSetPrepayAmount(50);
        this.props.onSetPaymentMethod("prepay");
        this.props.onChangeStep("prepay");
    },
    
    render: function() {
        return (
            <div className="start">
                <div className="start--column start--left">
                    <div className="credit" />
                    <div className="start--label center">
                        Pay By Card
                    </div>
                    <div className="start--subtext center">
                        Credit / Debit / Loyalty / Gift Card
                    </div>
                    <div className="start--directions">
                        <div className="col arrows-down" />
                        <div className="col start--directions-label">
                            Insert Card Below
                        </div>
                    </div>
                </div>
                <div className="start--column start--middle">
                    <div className="store" />
                    <div className="start--label center">
                        Pay Inside
                    </div>
                    <div className="start--button-container">
                        <div className="start--button-pay-inside center" onClick={this.onPayInsideClicked}>
                            Tap to Pay Inside
                        </div>
                    </div>
                </div>
                <div className="start--column start--right">
                    <div className="cash">
                    </div>
                    <div className="start--label center">
                        Pay By Cash
                    </div>
                    <div className="start--subtext center">
                        $1 / $5 / $10 / $20 / $50
                    </div>
                    <div className="start--directions">
                        <div className="col start--directions-label start--directions-label-right">
                            Insert Cash Below
                        </div>
                        <div className="col arrows-down" />
                    </div>    
                </div>
                <Alert ref="myAlert" label="Please proceed inside to pay" />
                <Banner ref="myBanner" 
                        title="Hello Loyal Customer!"
                        label="Your loyalty discount is $.30 per gallon"
                        sublabel="Select a payment method below to proceed" /> 
                <div className="row start--input">
                    <div className="start--card-buttons">
                        <PrePayButton value="Credit" onClick={this.onCreditClicked}/>
                        <PrePayButton value="Debit" onClick={this.onDebitClicked}/>
                        <PrePayButton value="Loyalty" onClick={this.onLoyaltyClicked}/>
                        <PrePayButton value="GiftCrd" onClick={this.onGiftcardClicked}/>
                    </div>
                    <CashInput onClick={this.onPrePayClicked} />
                </div>
                <div className="start--simulated-instructions">
                    <div className="start--card-button-instr">
                        &lt;&lt; Tap these buttons to <b>simulate the act</b> of inserting a card
                    </div>
                    <div className="start--cash-button-instr">
                        Tap these buttons to <b>simulate the act</b> of inserting cash &gt;&gt;
                    </div>
                </div>
            </div>
        );
    }
});