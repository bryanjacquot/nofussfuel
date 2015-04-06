var PrePayButton = React.createClass({    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
			<span onClick={this.onClick}>${this.props.value}</span>
        );
    }  
});
