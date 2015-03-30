var GradeButton = React.createClass({    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        var classes = "grade center";
        
        if( this.props.selected == "true" ) {
            classes = "grade center grade--selected";
        }
        
        return (
            <div className={classes} onClick={this.onClick}>
                <div className="gradevalue center">{this.props.value}</div>
                <div className="gradelabel center">{this.props.label}</div>
            </div>
        );
    }  
});