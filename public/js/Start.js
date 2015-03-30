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
    
    on1Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on5Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on10Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    on20Clicked: function() {
        this.props.onChangeStep("prepay");
    },
 
    on50Clicked: function() {
        this.props.onChangeStep("prepay");
    },
    
    onCreditClicked: function() {
        this.props.onChangeStep("zip");
    },
    
    onDebitClicked: function() {
        this.props.onChangeStep("pin");
    },
    
    onLoyaltyClicked: function() {
        this.refs.myBanner.raise();
        this.props.onChangeStep("loyalty");
    },
    
    onGiftcardClicked: function() {
        this.props.onChangeStep("giftcard");
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "start"}, 
                React.createElement("div", {className: "start--column start--left"}, 
                    React.createElement("div", {className: "credit image"}), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay By Card"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.onCreditClicked}, "Credit"), " / ", React.createElement("span", {onClick: this.onDebitClicked}, "Debit"), " / ", React.createElement("span", {onClick: this.onLoyaltyClicked}, "Loyalty"), " / ", React.createElement("span", {onClick: this.onGiftcardClicked}, "Gift Card")
                    ), 
                    React.createElement("div", {className: "start--directions"}, 
                        React.createElement("div", {className: "col arrows-down"}), 
                        React.createElement("div", {className: "col start--directions-label"}, 
                            "Insert Card Below"
                        )
                    )
                ), 
                React.createElement("div", {className: "start--column start--middle"}, 
                    React.createElement("div", {className: "store image"}), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay Inside"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.onCreditClicked}, "Credit"), " / ", React.createElement("span", {onClick: this.onDebitClicked}, "Debit"), " / ", React.createElement("span", {onClick: this.onLoyaltyClicked}, "Loyalty"), " / ", React.createElement("span", {onClick: this.onGiftcardClicked}, "Gift Card")
                    ), 
                    React.createElement("div", {className: "start--button-container"}, 
                        React.createElement("div", {className: "start--button-pay-inside center", onClick: this.onPayInsideClicked}, 
                            "Tap to Pay Inside"
                        )
                    )
                ), 
                React.createElement("div", {className: "start--column start--right"}, 
                    React.createElement("div", {className: "cash image"}
                    ), 
                    React.createElement("div", {className: "start--label center"}, 
                        "Pay By Cash"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.on1Clicked}, "$1"), " / ", React.createElement("span", {onClick: this.on5Clicked}, "$5"), " / ", React.createElement("span", {onClick: this.on10Clicked}, "$10"), " / ", React.createElement("span", {onClick: this.on20Clicked}, "$20"), " / ", React.createElement("span", {onClick: this.on50Clicked}, "$50")
                    ), 
                    React.createElement("div", {className: "start--directions"}, 
                        React.createElement("div", {className: "col start--directions-label start--directions-label-right"}, 
                            "Insert Cash Below"
                        ), 
                        React.createElement("div", {className: "col arrows-down"})
                    )
                ), 
                React.createElement(Alert, {ref: "myAlert", label: "Please proceed inside to pay"}), 
                React.createElement(Banner, {ref: "myBanner", title: "Hello Loyal Customer!", label: "Your loyalty discount is $.30 per gallon"})
            )
        );
    }
});