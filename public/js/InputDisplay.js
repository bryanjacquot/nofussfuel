var InputDisplay = React.createClass({displayName: "InputDisplay",
    render: function() {
        var digits = [];
        
        for( var i = 0; i < this.props.size; i++) {
            digits.push(React.createElement("div", {className: "digit"}, this.props.input[i]));
        }                    
        
        return (
            React.createElement("div", {id: "inputdisplay"}, 
                React.createElement("div", {className: "row label inputdisplay--label"}, 
                    this.props.prompt
                ), 
                React.createElement("div", {className: "row", id: "digits"}, 
                    digits
                )
            )
        );
    }  
});