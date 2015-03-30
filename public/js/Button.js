var Button = React.createClass({displayName: "Button",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
            React.createElement("div", {className: "button center", onClick: this.onClick}, this.props.value)
        );
    }  
});