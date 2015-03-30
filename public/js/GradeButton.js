var GradeButton = React.createClass({displayName: "GradeButton",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        var button_classes = "grade center";
        var price_classes = "gradeprice center"
        
        if( this.props.selected == "true" ) {
            button_classes = "grade center grade--selected";
            price_classes = "gradeprice center gradeprice--selected";
        }
        
        return (
            React.createElement("div", {className: button_classes, onClick: this.onClick}, 
                React.createElement("div", {className: "gradelabel center"}, this.props.label), 
                React.createElement("div", {className: "gradevalue center"}, this.props.value), 
                React.createElement("div", {className: price_classes}, this.props.price)
            )
        );
    }  
});