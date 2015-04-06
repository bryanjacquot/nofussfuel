var PrePayButton = React.createClass({displayName: "PrePayButton",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
			React.createElement("span", {onClick: this.onClick}, "$", this.props.value)
        );
    }  
});
