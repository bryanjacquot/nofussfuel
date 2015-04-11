var PrePayButton = React.createClass({displayName: "PrePayButton",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
			React.createElement("div", {className: "circle-base prepay--button", onClick: this.onClick}, this.props.unit, this.props.value)
        );
    }  
});
