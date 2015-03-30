var GradeButton = React.createClass({displayName: "GradeButton",    
    onClick: function() {
        this.props.onClick(this.props.value);
    },
    
    render: function() {
        var classes = "grade center";
        
        if( this.props.selected == "true" ) {
            classes = "grade center grade--selected";
        }
        
        return (
            React.createElement("div", {className: classes, onClick: this.onClick}, 
                React.createElement("div", {className: "gradevalue center"}, this.props.value), 
                React.createElement("div", {className: "gradelabel center"}, this.props.label)
            )
        );
    }  
});