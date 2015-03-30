var InputDisplay = React.createClass({displayName: "InputDisplay",
    render: function() {
        var digits = [];
        
        for( var i = 0; i < this.props.size; i++) {
            if( this.props.password == "true") {
                if( this.props.input[i] != undefined ) {
                    digits.push(React.createElement("div", {className: "digit"}, "*"));
                }
                else {
                    digits.push(React.createElement("div", {className: "digit"}));
                }
            }
            else {
                digits.push(React.createElement("div", {className: "digit"}, this.props.input[i]));
            }
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