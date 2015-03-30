var GradeButton = React.createClass({    
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
            <div className={button_classes} onClick={this.onClick}>
                <div className="gradelabel center">{this.props.label}</div>
                <div className="gradevalue center">{this.props.value}</div>
                <div className={price_classes}>{this.props.price}</div>
            </div>
        );
    }  
});