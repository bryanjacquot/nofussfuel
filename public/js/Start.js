var Start = React.createClass({displayName: "Start",
    
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
            React.createElement("div", {className: "start"}, 
                React.createElement("div", {className: "start--column start--left"}, 
                    React.createElement("div", {className: "credit"}), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay By Card"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        "Credit / Debit / Loyalty / Gift Card"
                    ), 
                    React.createElement("div", {className: "start--directions"}, 
                        React.createElement("div", {className: "col arrows-down"}), 
                        React.createElement("div", {className: "col start--directions-label"}, 
                            "Insert Card Below"
                        )
                    )
                ), 
                React.createElement("div", {className: "start--column start--middle"}, 
                    React.createElement("div", {className: "store"}), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay Inside"
                    ), 
                    React.createElement("div", {className: "start--button-container"}, 
                        React.createElement("div", {className: "start--button-pay-inside center", onClick: this.onPayInsideClicked}, 
                            "Tap to Pay Inside"
                        )
                    )
                ), 
                React.createElement("div", {className: "start--column start--right"}, 
                    React.createElement("div", {className: "cash"}
                    ), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay By Cash"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        "$1 / $5 / $10 / $20 / $50"
                    ), 
                    React.createElement("div", {className: "start--directions"}, 
                        React.createElement("div", {className: "col start--directions-label start--directions-label-right"}, 
                            "Insert Cash Below"
                        ), 
                        React.createElement("div", {className: "col arrows-down"})
                    )
                ), 
                React.createElement(Alert, {ref: "myAlert", label: "Please proceed inside to pay"}), 
                React.createElement(Banner, {ref: "myBanner", 
                        title: "Hello Loyal Customer!", 
                        label: "Your loyalty discount is $.30 per gallon", 
                        sublabel: "Select a payment method below to proceed"}), 
                React.createElement("div", {className: "row start--input"}, 
                    React.createElement("div", {className: "start--card-buttons"}, 
                        React.createElement(PrePayButton, {value: "Credit", onClick: this.onCreditClicked}), 
                        React.createElement(PrePayButton, {value: "Debit", onClick: this.onDebitClicked}), 
                        React.createElement(PrePayButton, {value: "Loyalty", onClick: this.onLoyaltyClicked}), 
                        React.createElement(PrePayButton, {value: "GiftCrd", onClick: this.onGiftcardClicked})
                    ), 
                    React.createElement(CashInput, {onClick: this.onPrePayClicked})
                ), 
                React.createElement("div", {className: "start--simulated-instructions"}, 
                    React.createElement("div", {className: "start--card-button-instr"}, 
                        "<< Tap these buttons to ", React.createElement("b", null, "simulate the act"), " of inserting a card"
                    ), 
                    React.createElement("div", {className: "start--cash-button-instr"}, 
                        "Tap these buttons to ", React.createElement("b", null, "simulate the act"), " of inserting cash >>"
                    )
                )
            )
        );
    }
});