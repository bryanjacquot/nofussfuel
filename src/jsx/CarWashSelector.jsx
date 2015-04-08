var CarWashSelector = React.createClass({

    onClick: function() {
        this.props.onCarWashSelected(this.props.value);
    },

    render: function() {
        var self = this;
        return (
            <div className="carwashselector" onClick={this.onClick}>
                <div className="washvalue center">{this.props.value}</div>
                <div className="washlabel">
                    <ul>
                        {Object.keys(this.props.label).map(function(i) {
                            return (
                                <li key={i}>
                                    {self.props.label[i]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <div className="washprice center">${this.props.price}</div>
            </div>
        );
    }  
});