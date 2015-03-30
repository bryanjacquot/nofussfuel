var Keypad = React.createClass({displayName: "Keypad",
    
    onEnterClicked: function() {
        this.props.onEnterClicked();
    },  
    
    onCancelClicked: function() {
        this.props.onCancelClicked();
    },  
    
    onBackspaceClicked: function() {
        this.props.onBackspaceClicked();
    },

    onButtonClicked: function(value) {
        this.props.onButtonClicked(value);
    },

    render: function() {
        return (
            React.createElement("div", {className: "row keypad"}, 
                React.createElement("div", {className: "col keypad--digits"}, 
                    React.createElement("div", {className: "row"}, 
                        React.createElement(Button, {value: "1", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "2", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "3", onClick: this.onButtonClicked})
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement(Button, {value: "4", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "5", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "6", onClick: this.onButtonClicked})
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement(Button, {value: "7", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "8", onClick: this.onButtonClicked}), 
                        React.createElement(Button, {value: "9", onClick: this.onButtonClicked})
                    ), 
                    React.createElement("div", {className: "row"}, 
                        React.createElement("div", {className: "keypad--cancel", onClick: this.onCancelClicked}, 
                            "Cancel Transaction"
                        ), 
                        React.createElement(Button, {value: "0", onClick: this.onButtonClicked})
                    )
                ), 
                React.createElement("div", {className: "col keypad--ops"}, 
                    React.createElement("div", {className: "row ops"}, 
                        React.createElement("div", {className: "button op center", id: "backspace", onClick: this.onBackspaceClicked}, "Backspace")
                    ), 
                    React.createElement("div", {className: "row ops"}, 
                        React.createElement("div", {className: "button op center", id: "enter", onClick: this.onEnterClicked}, "Enter")
                    )
                )
            )
        );
    }
});