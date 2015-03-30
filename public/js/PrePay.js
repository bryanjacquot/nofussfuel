var PrePay = React.createClass({displayName: "PrePay",
    
    onDoneClicked: function() {
        this.props.onChangeStep("grade");
    },
    
    onCancelClicked: function() {
        this.props.onChangeStep("start");
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
    
    render: function() {
        return (
            React.createElement("div", {className: "prepay"}, 
                React.createElement("div", {className: "col prepay--left"}, 
                    React.createElement("div", {className: "label center"}, 
                        "Prepaid Amount"
                    ), 
                    React.createElement("div", {className: "prepay--amount center"}, 
                        "$10"
                    ), 
                    React.createElement(Button, {value: "Done with Prepay", onClick: this.onDoneClicked})
                ), 
                React.createElement("div", {className: "col prepay--right"}, 
                    React.createElement("div", {className: "label center"}, 
                        "Insert Cash"
                    ), 
                    React.createElement("div", {className: "start--subtext center"}, 
                        React.createElement("span", {onClick: this.on1Clicked}, "$1"), " / ", React.createElement("span", {onClick: this.on5Clicked}, "$5"), " / ", React.createElement("span", {onClick: this.on10Clicked}, "$10"), " / ", React.createElement("span", {onClick: this.on20Clicked}, "$20"), " / ", React.createElement("span", {onClick: this.on50Clicked}, "$50")
                    ), 
                    React.createElement("div", {className: "cash image"}
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement(Button, {value: "Cancel", onClick: this.onCancelClicked})
                    )
                )
            )
        );
    }
});