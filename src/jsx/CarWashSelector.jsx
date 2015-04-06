var CarWashSelector = React.createClass({

    onClick: function() {
        this.props.onClick(this.props.value);
    },

    render: function() {
        return (
            <div className="carwashselector" onClick={this.onClick}>
                <div className="washlabel center">{this.props.label}</div>
                <div className="washvalue center">{this.props.value}</div>
                <div className="washprice center">{this.props.price}</div>
            </div>
        );
    }  
});