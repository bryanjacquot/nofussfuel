var cashDenominations = [1, 5, 10, 20, 50];

var CashInput = React.createClass({  

    onClick: function(value) {
        this.props.onClick(value);
    },

    render: function() {
    	var self = this;
        return (
            <div className="cash-input--buttons">
                {Object.keys(cashDenominations).map(function(item) {
                    return (
                        <PrePayButton key={item} value={cashDenominations[item]} onClick={self.onClick}/>
                    )
                })}
            </div>
        );
    }  
});