var ThankYou = React.createClass({displayName: "ThankYou",   
    
    getInitialState: function() {
        var myReceipt = "";
        var myArrows = "";
        var myRule = React.createElement("div", {className: "thankyou--emptyrule"});

        if( this.props.washType && this.props.washType != "" ) {
            myReceipt = "Please take your car wash receipt below";
            myArrows = React.createElement("div", {className: "arrows-down"});
            myRule = React.createElement("div", {className: "thankyou--horizontalrule"});
        }
        else if( this.props.receipt && this.props.receipt == "yes" ) {
            myReceipt = "Please take your receipt below";
            myArrows = React.createElement("div", {className: "arrows-down"});
            myRule = React.createElement("div", {className: "thankyou--horizontalrule"});
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
            React.createElement("div", {className: "thankyou"}, 
                React.createElement("div", {className: "row thankyou--banner"}, 
                    React.createElement("img", {src: "/img/check.png", className: "checkmark"}), "Your transaction has completed"
                ), 
                React.createElement("div", {className: "row thankyou--message"}, 
                    "Thanks for choosing Vail"
                ), 
                React.createElement("div", {className: "row divider"}, 
                    this.state.rule
                ), 
                React.createElement("div", {className: "row thankyou--receipt"}, 
                    this.state.receipt
                ), 
                React.createElement("div", {className: "row thankyou--images"}, 
                    this.state.arrows, 
                    React.createElement("div", {className: "row thankyou--logo"}, 
                        "vail"
                    )
                )
            )
        );
    }  
});