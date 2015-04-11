var PrePayButton = React.createClass({    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
			<div className="circle-base prepay--button" onClick={this.onClick}>{this.props.unit}{this.props.value}</div>
        );
    }  
});
