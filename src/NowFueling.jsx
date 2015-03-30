var NowFueling = React.createClass({   
    
    onDone: function() {
        this.props.onChangeStep("start");
    },
    
    render: function() {
        setTimeout(this.onDone, 3000);
        
        return (
            <div className="nowfueling">
                Now Fueling!
            </div>
        );
    }  
});