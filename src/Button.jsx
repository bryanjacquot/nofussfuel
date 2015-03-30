var Button = React.createClass({    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        return (
            <div className="button center" onClick={this.onClick}>{this.props.value}</div>
        );
    }  
});