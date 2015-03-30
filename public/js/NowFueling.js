var NowFueling = React.createClass({displayName: "NowFueling",   
    
    onDone: function() {
        this.props.onChangeStep("start");
    },
    
    render: function() {
        setTimeout(this.onDone, 3000);
        
        return (
            React.createElement("div", {className: "nowfueling"}, 
                "Now Fueling!"
            )
        );
    }  
});