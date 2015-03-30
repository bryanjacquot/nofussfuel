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
        this.props.onChangeStep("loyalty");
    },
    
    onGiftcardClicked: function() {
        this.props.onChangeStep("giftcard");
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "start"}, 
                React.createElement("div", {className: "col start--left"}, 
                    React.createElement("div", {className: "label center"}, 
                        "Insert Card"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.onCreditClicked}, "Credit"), " / ", React.createElement("span", {onClick: this.onDebitClicked}, "Debit"), " / ", React.createElement("span", {onClick: this.onLoyaltyClicked}, "Loyalty"), " / ", React.createElement("span", {onClick: this.onGiftcardClicked}, "Gift Card")
                    ), 
                    React.createElement("div", {className: "credit image"}
                    )
                ), 
                React.createElement("div", {className: "col start--right"}, 
                    React.createElement("div", {className: "label center"}, 
                        "Insert Cash"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.on1Clicked}, "$1"), " / ", React.createElement("span", {onClick: this.on5Clicked}, "$5"), " / ", React.createElement("span", {onClick: this.on10Clicked}, "$10"), " / ", React.createElement("span", {onClick: this.on20Clicked}, "$20"), " / ", React.createElement("span", {onClick: this.on50Clicked}, "$50")
                    ), 
                    React.createElement("div", {className: "cash image"}
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        "OR"
                    ), 
                    React.createElement(Button, {value: "Pay Inside", onClick: this.onPayInsideClicked})
                ), 
                React.createElement(Alert, {ref: "myAlert", label: "Please proceed inside to pay"})
            )
        );
    }
});